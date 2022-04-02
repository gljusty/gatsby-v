import * as React from "react"
import styled from "styled-components"

const StyledContactMe = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  background: radial-gradient(ellipse at bottom, aquamarine, #1b3443);
  padding: 2vh 2vw;
  border-radius: 8px;
  margin: auto auto;
  color: whitesmoke;
`
const StyledContactLink = styled.div`
  opacity: 0;
  color: whitesmoke;
  transition: all 250ms linear;
  ${StyledContactMe}:hover & {
    opacity: 100%;
  }
`

const testf = () => {
  return console.log("testf")
}

const ContactMeComponent = () => {
  return (
    <div style={{ position: `absolute`, top: `55vh`, left: `5vw` }}>
      <StyledContactMe
        className="_contact animate__animated animate__fadeInUp"
        onClick={testf}
        cursor="pointer"
      >
        <StyledContactLink className="_test">Contact Me</StyledContactLink>
      </StyledContactMe>
    </div>
  )
}

export default ContactMeComponent
