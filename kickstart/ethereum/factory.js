//return the actual factory we created....

import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x303f8EFd80f157075965a7AB4a2F3dB24Cd82b1f"
);

export default instance;