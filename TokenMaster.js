const { expect } = require("chai");

const NAME = "TokenMaster";
const SYMBOL = "TM";

const OCCASION_NAME = "ETH Texas";
const OCCASION_COST = ethers.utils.parseUnits('1', 'ether');
const OCCASION_MAX_TICKETS = 100;
const OCCASION_DATE = "Apr 27";
const OCCASION_TIME = "10:00AM CST";
const OCCASION_LOCATION = "Austin, Texas";

describe("TokenMaster", () => {
  let TokenMaster;
  let deployer, buyer;
  let tokenMaster;

  beforeEach(async () => {
    // setup accounts
    [deployer, buyer] = await ethers.getSigners();
    const TokenMasterFactory = await ethers.getContractFactory("TokenMaster");
    tokenMaster = await TokenMasterFactory.deploy(NAME, SYMBOL);

    // List an occasion
    await tokenMaster.connect(deployer).list(
      OCCASION_NAME,
      OCCASION_COST,
      OCCASION_MAX_TICKETS,
      OCCASION_DATE,
      OCCASION_TIME,
      OCCASION_LOCATION
    );

    // Wait for the transaction to be mined
    await tokenMaster.deployTransaction.wait();
  });

  describe("Deployment", () => {
    it("Sets the name", async () => {
      expect(await tokenMaster.name()).to.equal(NAME);
    });

    it("Sets the symbol", async () => {
      expect(await tokenMaster.symbol()).to.equal(SYMBOL);
    });

    it("Sets the owner", async () => {
      expect(await tokenMaster.owner()).to.equal(deployer.address);
    });
  });
  
  describe("Occasion", () => {
    it('Updates occasions count', async () => {
      const totalOccasions = await tokenMaster.totalOccasions();
      expect(totalOccasions).to.be.equal(1);
    });

    it('Retrieves occasion details', async () => {
      const occasion = await tokenMaster.getOccasion(1);
      expect(occasion.id).to.be.equal(1);
      expect(occasion.name).to.equal(OCCASION_NAME);
      expect(occasion.cost).to.equal(OCCASION_COST);
      expect(occasion.maxTickets).to.equal(OCCASION_MAX_TICKETS);
      expect(occasion.date).to.equal(OCCASION_DATE);
      expect(occasion.time).to.equal(OCCASION_TIME);
      expect(occasion.location).to.equal(OCCASION_LOCATION);
    });
  });
  describe("Minting", () => {
    const ID = 1;
    const SEAT = 50;
    const AMOUNT = ethers.utils.parseUnits('1', 'ether');

    beforeEach(async () => {
      const transaction = await tokenMaster.connect(buyer).mint(ID, SEAT, { value: AMOUNT });
      await transaction.wait();
    });

    it('Updates ticket count', async () => {
      const occasion = await tokenMaster.getOccasion(1);
      expect(occasion.tickets).to.be.equal(OCCASION_MAX_TICKETS - 1);
    });

    it('Updates buying status', async () => {
      const status = await tokenMaster.hasBrought(ID,buyer.address);
      expect(status).to.be.equal(true);
    });

    it('Updates overall seating status', async () => {
      const seats = await tokenMaster.getSeatsTaken(ID)
      expect(seats.length).to.equal(1)
      expect(seats[0]).to.equal(SEAT)
    })

    it('Updates the contract balance', async () => {
      const balance = await ethers.provider.getBalance(tokenMaster.address)
      expect(balance).to.be.equal(0)
    });
  });
});
