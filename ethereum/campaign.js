import web3 from "./web3";
import Campaign from "./build/Campaign.json";
import "semantic-ui-css/semantic.min.css";

const camp =  (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};

export default camp;