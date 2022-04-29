import React, { Component } from "react";
import factory from "../ethereum/factory"; //return all campaigns relevant info...

class CampaignIndex extends Component {

  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns} //return as props
  }  


  render() {
    return <div>{this.props.campaigns[0]}</div>;
  }
}

export default CampaignIndex;
