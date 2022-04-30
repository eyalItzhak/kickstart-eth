//return the actual factory we created....

import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x18482056e2e825F031E27f264bC4D61669fD08af"
);

export default instance;