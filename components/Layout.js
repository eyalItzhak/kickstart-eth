import React from "react";
import Header from "./header";

//ui-react package =>for styling
import { Container } from "semantic-ui-react"; //javascript side

import Head from "next/head";

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
