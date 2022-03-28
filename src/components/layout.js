import * as React from "react";
import PropTypes from "prop-types";

import NavBar from "./navbar";
import Stars from "./stars";
import Mountains from "./mountains";
import "./layout.scss";

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main style={{height: `100vh`, width: `100vw`, overflow: `hidden`}}>
          <Stars></Stars>
          <NavBar></NavBar>
          {children}
          <Mountains></Mountains>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
