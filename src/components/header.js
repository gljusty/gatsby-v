import * as React from "react"
import styled from "styled-components"
import 'animate.css';
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Stars from "./stars"

const StyledHeader = styled.header`
height: 2rem;
background: linear-gradient(270deg, rgba(1,1,1,1), rgba(0,0,0,0.25));
margin-bottom: 1.45rem;
transition: translateY() linear 2000ms;
transform: translateY(100px);
`
const StyledH1 = styled.h1`
display: flex;
float: right;
margin-top: 0;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Stars></Stars>
    <StyledH1>
      <Link to="/" style={{color: "whitesmoke",textDecoration: "none"}} className="animate__animated animate__fadeInDown">
          {siteTitle}
      </Link>
    </StyledH1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
