

// Import ERC721 contract from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenMaster is ERC721 {
    address public owner;
    uint256 public totalOccasions;
    uint256 public totalSupply;

    struct Occasion {
        uint256 id;
        string name;
        uint256 cost;
        uint256 tickets;
        uint256 maxTickets;
        string date;
        string time;
        string location;
    }

    mapping(uint256 => Occasion) public occasions;
    mapping(uint256 => mapping(address => bool)) public hasBought;
    mapping(uint256 => uint256[]) public seatsTaken; // Store seats taken for each occasion

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
    
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        owner = msg.sender;
    }

    function list(
        string memory _name,
        uint256 _cost,
        uint256 _maxTickets,
        string memory _date,
        string memory _time,
        string memory _location
    ) public onlyOwner {
        totalOccasions++;
        occasions[totalOccasions] = Occasion(totalOccasions, _name, _cost, 0, _maxTickets, _date, _time, _location);
        _mint(msg.sender, totalOccasions); // Mint a new token for each occasion listed
    }

    function mint(uint256 _id, uint256 _seat) public payable {
        require(_id != 0, "Invalid occasion ID");
        require(_id <= totalOccasions, "Invalid occasion ID");
        require(msg.value >= occasions[_id].cost, "Insufficient funds");
        require(_seat > 0 && _seat <= occasions[_id].maxTickets, "Invalid seat");
        require(!hasBought[_id][msg.sender], "Already bought");
        require(occasions[_id].tickets < occasions[_id].maxTickets, "Sold out");

        // Update ticket count and buying status
        occasions[_id].tickets += 1;
        hasBought[_id][msg.sender] = true;

        // Assign seat and update seats taken for the occasion
        seatsTaken[_id].push(_seat);

        // Mint token to buyer
        totalSupply++;
        _safeMint(msg.sender, totalSupply);
    }

    function getOccasion(uint256 _id) public view returns (Occasion memory) {
        return occasions[_id];
    }

    function getSeatsTaken(uint256 _id) public view returns (uint256[] memory) {
        return seatsTaken[_id];
    }
    function withdraw() public onlyOwner {
    (bool success, ) = owner.call{value: address(this).balance}("");
    require(success, "Withdrawal failed");
    }
}
