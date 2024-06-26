# EVENT_TICKET_DAPP

* Then initialize an npm project

```
npm init
```

* Now we can install Hardhat:

```
npm install --save-dev hardhat

```

* In the same directory where you installed Hardhat run:

```
npx hardhat init
```
![Screenshot 2024-04-15 230154](https://github.com/Riyatomar14/test-hardhat-contract/assets/143107173/62c7afd6-ba7b-43fb-b86f-8bb2b937ac26)

- Install the Hardhat plugin for ethers.js, we will use recommended plugins here
    ```bash
    $ npm install --save-dev @nomicfoundation/hardhat-toolbox
    ```
- Add the following lines to `hardhat.config.js`
    ```javascript
    require("@nomicfoundation/hardhat-toolbox");
    ```
    - add the highlighted line,which will look like this

  ![image](https://github.com/Riyatomar14/test-hardhat-contract/assets/143107173/42c97fb4-d9e1-453e-9735-4ddb4a212239)

* in this you have to set up your TokenMaster.sol like this
  
https://github.com/Riyatomar14/Event_tickets_Dapp/blob/main/TokenMaster.sol

* after that you set up your hardhatconfig.js like this

https://github.com/Riyatomar14/Event_tickets_Dapp/blob/main/TokenMaster.js

* then you see folders and files like this-

![image](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/3a88ff23-a29e-4cd5-b1f3-89e9dd9fb1ea)


* 3.now you are ready to depoly live on network testnet

```
npx hardhat clean
```

```
npx hardhat compile
```

then it will look like this


* 4. now you are ready to test at local
 
```
npx hardhat test

```
![Screenshot 2024-04-25 203500](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/41776e92-a8a8-407e-be9d-773c57ac0a06)

* 5. for local you have to run another terminal and use command
 
```
npx hardhat node
```

![Screenshot 2024-04-25 203720](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/45c3df74-cf24-4b0c-b32a-27c14f2f1241)
![Screenshot 2024-04-25 203731](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/01fcce8d-9278-4e0f-843f-33316b7261ac)
![Screenshot 2024-04-25 203742](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/8ba13466-47c7-4268-83cf-863e59ac2831)

* 6. you see in your first terminal like this
 
![Screenshot 2024-04-25 205213](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/4c75f347-bcfd-48bd-9541-32ea465a9c94)

* 7. now use command to depoly local
 
```
npx hardhat scripts/deploy.js --network local 
```
![Screenshot 2024-04-26 130746](https://github.com/Riyatomar14/Event_tickets_Dapp/assets/143107173/de858d77-3e8b-46ff-85aa-c6236bba81bd)

```
npm start
```
![Screenshot 2024-04-26 123702](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/aff57bfa-2d57-4e2e-9be0-43bf1e81fd93)
![Screenshot 2024-04-25 210523](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/87b4717c-6f06-4207-a7da-2cfe8dc2b77b)
![Screenshot 2024-04-27 100533](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/55b7491e-a3b7-4b69-bf2a-7161e78fd819)
![Screenshot 2024-04-27 100810](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/ba5b5199-e0b0-4051-b0a4-ebdbe202f680)
![Screenshot 2024-04-27 103147](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/ee78a392-e40c-4aca-9064-9feb94867eec)
![Screenshot 2024-04-27 103704](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/1f18d6a3-3d7b-43fe-b5b1-4e709dfbfd96)
![Screenshot 2024-04-27 104659](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/d1acf691-4bff-474e-952b-138a28c88d8b)
![Screenshot 2024-04-27 112855](https://github.com/Riyatomar14/coding-in-advance-c/assets/143107173/fb33df81-e574-4175-a460-71ca00638696)


* 8. now set up your app.js for frontend

![Screenshot 2024-04-25 212212](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/d85ee351-9540-4acf-b000-06948ef19a82)
 https://github.com/Riyatomar14/Event_tickets_Dapp/blob/main/App.js
![Screenshot 2024-04-26 130847](https://github.com/Riyatomar14/Event_tickets_Dapp/assets/143107173/88e98c27-ea71-4bcc-b091-b29777c9864c)

 ![Screenshot 2024-04-25 220631](https://github.com/Riyatomar14/Paypal-clone-project-hardhat/assets/143107173/c93a2fb4-f55d-4fa2-9e3e-1ad7a8eaeb64) 

