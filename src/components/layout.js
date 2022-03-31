import * as React from "react"
import PropTypes from "prop-types"
import NavBar from "./navbar"
import Stars from "./stars"
import Mountains from "./mountains"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main
        style={{
          minHeight: `100vh`,
          minWidth: `100vw`,
          height: `100vh`,
          width: `100vw`,
          overflow: `auto`,
        }}
      >
        <NavBar />
        <Stars />
        {children}
        <Mountains />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
