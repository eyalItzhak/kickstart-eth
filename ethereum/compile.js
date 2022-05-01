const path = require("path");
const solc = require("solc"); //compiler
const fs = require("fs-extra"); //same like fs ,but with extra functions...

//delete build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

//read Campaign.sol
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8"); // read the file in campaignPath

//compile source
const output = solc.compile(source, 1).contracts;

//create build folder
fs.ensureDirSync(buildPath);

//write info in json file
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"), //file cannot start with ":" in windows!
    output[contract]
  );
}
