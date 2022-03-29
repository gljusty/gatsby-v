import * as React from "react"
import styled from "styled-components"
import 'animate.css';
import { Link } from "gatsby";


const StyledHeader = styled.header`
position: absolute;
top: 0;
left: 20%;
display: flex;
float: left;
padding: 1rem;
`

const StyledH1 = styled.h1`
top: 20%;
position: fixed;
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
left: 42vw;
top: 80vh;
padding-top: 20px;
display: flex;
justify-content: center;
width: 12em;
height: 8em;
font-family: 'Courier';
text-align: center;
font-size: 12px;
line-height: 12px;
transition: background-color 250ms ease-in-out;
 &:hover {
   background-color: slategrey;
 }
`

const Header = () => (
  <StyledHeader>
    <StyledH1>
      <div id='hi' style={{margin: `1rem`}} className="animate__animated animate__fadeInLeftBig animate__faster">  Hi!  </div>
      <div id='im' style={{margin: `1rem`}} className="animate__animated animate__fadeInLeftBig">  I'm  </div>
      <div id='bryan' style={{margin: `1rem`}} className="animate__animated animate__fadeInDown animate__slower"> Bryan </div>
    </StyledH1>
    <div style={{display: `hidden`, position: "absolute", top: `0`, left: `0`}}>
      <StyledMsg as={Link} to="/projects" className="animate__animated animate__fadeInUp animate__faster animate__delay-2s">  
        I make stuff in Boulder, Colorado
      </StyledMsg>
    </div>
  </StyledHeader>
  
)

export default Header
