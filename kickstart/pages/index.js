import React, { Component } from "react";
import factory from "../ethereum/factory"; //return all campaigns relevant info...

//layout
import Layout from "../components/Layout";

//ui-react package =>for styling
import { Card, Button } from "semantic-ui-react"; //javascript side

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
      <Layout>
        <div>
          <h3>open campaigns</h3>
          
          <Button floated="right" content="Create Campaign" icon="add circle" primary />
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
