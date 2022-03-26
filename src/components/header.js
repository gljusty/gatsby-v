import * as React from "react"
import styled from "styled-components"
import 'animate.css';
import PropTypes from "prop-types"
import { Link } from "gatsby"


const StyledHeader = styled.header`
position: sticky;
top: 20%;
height: 2rem;
background: linear-gradient(270deg, rgba(1,1,1,1), rgba(0,0,0,0.25));
margin-bottom: 1.45rem;
`
const StyledH1 = styled.h1`
display: flex;
margin-top: 0;
place-content: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledH1>
      <div id='hi' style={{margin: `1rem`}} className="animate__animated animate__fadeInLeftBig animate__delay-2s">  Hi!  </div>
      <div id='im' style={{margin: `1rem`}} className="animate__animated animate__fadeInLeftBig animate__faster animate__delay-2s">  I'm  </div>
      <Link id='bryan' to="/" style={{color: "whitesmoke",textDecoration: "none",margin: "1rem"}} className="animate__animated animate__fadeInDown animate__slower animate__delay-3s">
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
