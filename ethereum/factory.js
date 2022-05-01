import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x40729955E68993f837372eFE568937574FE39111"
)

export default instance;