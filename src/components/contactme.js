import * as React from "react"
import styled from "styled-components"
import LeaderLine from "leader-line-new"

const StyledContactMe = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  cursor: pointer;
  display: flex;
  position: fixed;
  top: 95vh;
  left: 5vw;
  background: transparent;
  padding: 2vh 2vw;
  border-radius: 8px;
  margin: auto auto;
  color: whitesmoke;
`
const StyledContactLink = styled.a`
  margin: 0 1vw 0 1vw;
  opacity: 100%;
  font-family: "Courier";
  font-weight: bold;
  text-decoration: none;
  color: aquamarine;
  transition: all 250ms linear;
  ${StyledContactMe}:hover & {
    color: whitesmoke;
  }
`

const testf = () => {
  const start = document.querySelector("._contact")
  const end = document.querySelector("._email_link")
  if (typeof window !== undefined) {
    setTimeout(() => {
      try {
        const line = new LeaderLine(start, end, {
          hide: true,
          color: `aquamarine`,
          startSocket: `top`,
          endSocket: `bottom`,
          path: `grid`,
          startPlug: `behind`,
          endPlug: `arrow2`,
          startSocketGravity: 0,
          endSocketGravity: 40,
        })
        const eline = document.querySelector(".leader-line:last-of-type")
        eline.style.zIndex = -1
        line.show("draw")
      } catch {
        //do nothing
      }
    }, 100)
  }
}

const ContactMeComponent = () => {
  return (
    <StyledContactMe
      className="_contact animate__animated animate__fadeInUp"
      onClick={testf}
      cursor="pointer"
    >
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
