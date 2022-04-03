import * as React from "react"
import styled from "styled-components"
import "animate.css"
import { Link } from "gatsby"

const StyledMsg = styled(props => <Link {...props} />)`
  text-decoration: none;
  overflow: hidden;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    63% 76%,
    50% 100%,
    35% 76%,
    0% 75%
  );
  color: whitesmoke;
  background-color: black;
  position: absolute;
  top: 75vh;
  left: 60vw;
  padding-top: 2vh;
  display: flex;
  justify-content: center;
  min-width: fit-content;
  width: 12vw;
  height: 8vh;
  font-family: "Courier";
  text-align: center;
  font-size: 0.75em;
  line-height: 0.75em;
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: slategrey;
  }
`

const StyledHeader = styled.header`
  position: absolute;
  left: 20vw;
  top: 20vh;
  display: flex;
  float: left;
  padding: 1rem;
`

const StyledH1 = styled.h1`
  display: flex;
  float: left;
`

const Header = () => {
  React.useEffect(() => {
    const m = document.querySelectorAll("._message")[0]
    m.addEventListener(
      "animationend",
      () => {
        setTimeout(() => {
          m.classList.remove("animate__fadeInUp", "animate__faster")
          m.classList.add("animate__animated", "animate__bounce")
        }, 1000)
      },
      false
    )
  })
  return (
    <>
      <StyledHeader>
        <StyledH1 className="animate__animated animate__fadeInLeftBig animate__faster">
          <div
            style={{ margin: `1vw` }}
            id="hi"
            className="_hello animate__animated animate__fadeInLeftBig  animate__faster"
          >
            {" "}
            Hi!{" "}
          </div>
          <div
            style={{ margin: `1vw` }}
            id="im"
            className="_hello animate__animated animate__fadeInLeftBig"
          >
            {" "}
            I'm{" "}
          </div>
          <div
            style={{ margin: `1vw` }}
            id="bryan"
            className="_hello animate__animated animate__flipInX animate__slower"
          >
            {" "}
            Bryan{" "}
          </div>
        </StyledH1>
      </StyledHeader>
      <div
        style={{ display: `hidden`, position: "absolute", top: `0`, left: `0` }}
      >
        <StyledMsg
          as={Link}
          to="/projects"
          className="_message animate__animated animate__fadeInUp animate__faster animate__delay-2s"
        >
          I make stuff in Boulder, Colorado
        </StyledMsg>
      </div>
    </>
  )
}

export default Header
