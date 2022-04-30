import React from "react";
import { Link } from "../routes";

//ui-react package =>for styling
import { Menu } from "semantic-ui-react"; //javascript side

const Header = (props) => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
      <Link route="/">
        <a className="item">Campaign</a>
      </Link>

      <Link route="/campaigns/new">
        <a className="item">+</a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
