import * as React from "react"
import styled from "styled-components"

const StyledContactMe = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  cursor: pointer;
  display: flex;
  position: fixed;
  top: 97.5vh;
  left: 0vw;
  background: transparent;
  border-radius: 8px;
  margin: auto auto;
  color: whitesmoke;
`
const StyledContactLink = styled.a`
  margin: 0 0.5vw 0 0.5vw;
  opacity: 100%;
  font-family: "Courier";
  font-weight: bold;
  text-decoration: none;
  color: aquamarine;
  transition: all 250ms linear;
  &:hover {
    color: whitesmoke;
  }
`

const ContactMeComponent = () => {
  return (
    <StyledContactMe className="_contact animate__animated animate__fadeInUp">
      <StyledContactLink
        className="_contact"
        href="mailto:b@gljusty.dev"
        target="_blank"
      >
        b@gljusty.dev
      </StyledContactLink>
      <span> | </span>
      <StyledContactLink
        className="_contact"
        href="https://www.github.com/gljusty"
        target="_blank"
      >
        github.com/gljusty
      </StyledContactLink>
    </StyledContactMe>
  )
}

export default ContactMeComponent
