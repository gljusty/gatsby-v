import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledPancakeContainer = styled.div`
  position: absolute;
  height: 10vh;
  width: 10vw;
  min-height: 100px;
  min-width: 100px;
  top: 25vh;
  left: 75vw;
`

const StyledStackIcon = styled.div`
  background-color: transparent;
  min-width: 20px;
`

const StyledFrontEndIconContainer = styled.div`
  display: flex;
  margin-top: 3vh;
  width: 10vw;
  min-width: 100px;
`

const StyledBackEndIconContainer = styled.div`
  display: grid;
  grid-template-areas:
    "a b b"
    "c c c";
  align-content: center;
  margin-top: 5vh;
  width: 10vw;
  height: 20vh;
  min-width: 100px;
`

const PancakeComponent = () => {
  return (
    <StyledPancakeContainer>
      <StaticImage
        className="_pancake"
        src="../assets/clipart1195004.png"
        alt=""
        placeholder="tracedSVG"
      />
      <StyledFrontEndIconContainer className="_feContainer">
        <StyledStackIcon>
          <StaticImage
            src="../assets/React_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_react animate__animated animate__fadeInRightBig animate__slow"
            style={{ margin: `1vh 0 0 0` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Vue_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_vue animate__animated animate__fadeInRightBig animate__slower"
            style={{ margin: `0 1vw 0 0` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Bootstrap_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_bootstrap animate__animated animate__fadeInRightBig animate__fast"
            style={{
              width: `3vw`,
              margin: `5vh 0 0 -3vw`,
              minWidth: `30px`,
            }}
          />
        </StyledStackIcon>
      </StyledFrontEndIconContainer>
      <StyledBackEndIconContainer className="_beContainer">
        <StyledStackIcon>
          <StaticImage
            src="../assets/python_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_python animate__animated animate__fadeInUpBig"
            style={{ minWidth: `40px`, width: `4vw` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Postres_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_postgres animate__animated animate__fadeInRightBig"
            style={{ width: `3vw`, margin: `1vh 0 0 1vw`, minWidth: `30px` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/marshmallow_icon.png"
            alt=""
            className="_marshmallow animate__animated animate__fadeInUpBig animate__slow"
            placeholder="tracedSVG"
            style={{ width: `3vw`, margin: `5vh 0 0 -2vw`, minWidth: `30px` }}
            imgStyle={{ filter: `invert(100%)` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/flask_icon_svg.svg"
            alt=""
            placeholder="tracedSVG"
            style={{
              width: `3vw`,
              height: `fit-content`,
              minWidth: `60px`,
              margin: `0 0 0 4vw`,
            }}
            imgStyle={{ filter: `invert(100%)` }}
            className="_flask animate__animated animate__fadeInUpBig animate__fast"
          />
        </StyledStackIcon>
      </StyledBackEndIconContainer>
    </StyledPancakeContainer>
  )
}

export default PancakeComponent
