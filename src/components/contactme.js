import * as React from "react"
import styled from "styled-components"

const StyledContactMe = styled.div`
  @media only screen and (max-width: 768px) {
    top: 0vh;
    padding: 0;
  }
  display: block;
  position: fixed;
  top: 92.5vh;
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
  font-size: 0.66em;
  line-height: 0.66em;
  text-decoration: none;
  color: aquamarine;
  transition: all 250ms linear;
  z-index: -2;
  &:hover {
    color: whitesmoke;
    z-index: 2;
  }
`

const ContactMeComponent = () => {
  return (
    <StyledContactMe className="_contact animate__animated animate__fadeInUp">
      <div>
        <StyledContactLink
          className="_contact"
          href="mailto:b@gljusty.dev"
          target="_blank"
        >
          b@gljusty.dev
        </StyledContactLink>
      </div>

      <div>
        <StyledContactLink
          className="_contact"
          href="https://www.github.com/gljusty"
          target="_blank"
        >
          github.com/gljusty
        </StyledContactLink>
      </div>
    </StyledContactMe>
  )
}

export default ContactMeComponent
