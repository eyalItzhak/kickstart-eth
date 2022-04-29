import React, { Component } from "react";
import factory from "../ethereum/factory"; //return all campaigns relevant info...

//ui-react package =>for styling
import { Card } from "semantic-ui-react"; //javascript side
//import 'semantic-ui-css/semantic.min.css'  //css side

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns }; //return as props
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: <a>view Campaigns</a>,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        {this.renderCampaigns()}
      </div>
    );
  }
}

export default CampaignIndex;
