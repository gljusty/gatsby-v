import * as React from "react";
import PropTypes from "prop-types";

import NavBar from "./navbar";
import Stars from "./stars";
import Mountains from "./mountains";
import "./layout.scss";

const Layout = ({ children }) => {

  return (
    <>
      <Stars></Stars>
      <NavBar></NavBar>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0`,
          height: `100vh`
        }}
      >
        <main>{children}</main>
        <Mountains></Mountains>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
