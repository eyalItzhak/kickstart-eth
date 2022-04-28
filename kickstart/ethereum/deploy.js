const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/campaignFactory.json");

const provider = new HDWalletProvider(
  "then case hidden turtle amateur purity alpha rain run poem spike tone",
  "https://rinkeby.infura.io/v3/dc652a5224e2444ab7fc29fe16934889"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });


  console.log("*********deployed address*************");
  console.log("Contract deployed to", result.options.address); //return the address of rhe contract

  provider.engine.stop();
};
deploy();
