import * as React from "react"
import styled from "styled-components"
import 'animate.css';
import { Link } from "gatsby";


const StyledHeader = styled.header`
display: flex;
float: left;
padding: 1rem;
`

const StyledH1 = styled.h1`
display: flex;
float: left;
`

const StyledMsg = styled(props => <Link {...props} />)`
text-decoration: none;
overflow: hidden;
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 63% 76%, 50% 100%, 35% 76%, 0% 75%);
color: whitesmoke;
background-color: black;
position: absolute;
top: 75vh;
left: 62vw;
padding-top: 2em;
display: flex;
justify-content: center;
width: 12em;
height: 8em;
font-family: 'Courier';
text-align: center;
font-size: .75em;
line-height: .75em;
transition: background-color 250ms ease-in-out;
 &:hover {
   background-color: slategrey;
 }
`

const Header = () => (
  <StyledHeader>
    <StyledH1 className="animate__animated animate__fadeInLeftBig animate__faster">
      <div id='hi' className="animate__animated animate__fadeInLeftBig animate__faster">  Hi!  </div>
      <div id='im' className="animate__animated animate__fadeInLeftBig">  I'm  </div>
      <div id='bryan' className="animate__animated animate__fadeInDown animate__slower"> Bryan </div>
    </StyledH1>
    <div style={{display: `hidden`, position: "absolute", top: `0`, left: `0`}}>
      <StyledMsg as={Link} to="/projects" className="animate__animated animate__fadeInUp animate__faster animate__delay-2s">  
        I make stuff in Boulder, Colorado
      </StyledMsg>
    </div>
  </StyledHeader>
  
)

export default Header
