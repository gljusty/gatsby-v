import * as React from "react"
import styled from "styled-components"
import 'animate.css';


const StyledHeader = styled.header`
position: sticky;
width: 100%;
top: 0;
left: -25%;
display: block;
float: left;
padding: 1rem;

`
const StyledH1 = styled.h1`
display: flex;
float: left;
margin-left: -20rem;
`

const StyledMsg = styled.div`
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 63% 76%, 50% 100%, 35% 76%, 0% 75%);
color: whitesmoke;
background-color: black;
position: absolute;
left: 83.25%;
top: 575%;
padding-top: 20px;
margin-bottom: 0px;
display: flex;
width: 10rem;
height: 5rem;
font-family: 'Courier';
text-align: center;
font-size: 12px;
line-height: 12px;
`

const Header = () => (
  <StyledHeader>
    <StyledH1>
      <div id='hi' style={{margin: `1rem`}} className="animate__animated animate__fadeInLeftBig animate__delay-2s">  Hi!  </div>
      <div id='im' style={{margin: `1rem`}} className="animate__animated animate__fadeInLeftBig animate__faster animate__delay-2s">  I'm  </div>
      <div id='bryan' style={{margin: `1rem`}} className="animate__animated animate__fadeInDown animate__slower animate__delay-3s"> Bryan </div>
    </StyledH1>
    <StyledMsg className="animate__animated animate__fadeIn animate__faster animate__delay-5s">
        <div id='message'> I make stuff in Boulder, Colorado</div>
    </StyledMsg>
  </StyledHeader>
  
)

export default Header
