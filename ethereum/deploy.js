const HDWalletProvider = require("@truffle/hdwallet-provider"); //provider to connect to some eth network
const Web3 = require("web3"); //interface
const compiledFactory = require("./build/campaignFactory.json"); //take the compile factory info

const provider = new HDWalletProvider( //make the connection to wallet and to real eth node (in this case rinkeby)
  "then case hidden turtle amateur purity alpha rain run poem spike tone", //account "refs" (not exact...)
  "https://rinkeby.infura.io/v3/dc652a5224e2444ab7fc29fe16934889"
);


const web3 = new Web3(provider); //connect web3 to eth node , connect with the account "refs"

const deploy = async () => {
  const accounts = await web3.eth.getAccounts(); //get all real account from the refs....

  console.log("Attempting to deploy from account", accounts[0]); //we will try to deploy from account 0 (so we need to check if he have enough ether... )

  const result = await new web3.eth.Contract( //try to deploy...
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });


  console.log("*********deployed address*************");
  console.log("Contract deployed to", result.options.address); //return the address of rhe contract

  provider.engine.stop();
};


deploy(); //run all the script (we used a function because we want to used async and we can used it only on functions!)
