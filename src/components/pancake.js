import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledPancakeContainer = styled.div`
  position: absolute;
  height: 200px;
  width: 200px;
  top: 25vh;
  left: 75vw;
`

const StyledStackIcon = styled.div`
  background-color: transparent;
`

const StyledFrontEndIconContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  width: 10vw;
`

const StyledBackEndIconContainer = styled.div`
  display: grid;
  grid-template-areas:
    "a b b"
    "c c c";
  align-content: center;
  margin-top: 10vh;
  width: 10vw;
  height: 20vh;
`

const PancakeComponent = () => {
  return (
    <StyledPancakeContainer className="_pancake">
      <StaticImage
        src="../assets/clipart1195004.png"
        alt=""
        placeholder="tracedSVG"
      />
      <StyledFrontEndIconContainer>
        <StyledStackIcon>
          <StaticImage
            src="../assets/React_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_react"
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Vue_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_vue"
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Bootstrap_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_bootstrap"
          />
        </StyledStackIcon>
      </StyledFrontEndIconContainer>
      <StyledBackEndIconContainer>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Python_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_python"
            style={{ width: `5vw` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Postres_logo.png"
            alt=""
            placeholder="tracedSVG"
            className="_postgres"
            style={{ width: `3vw`, margin: `0.5vh 0 0 -4.2vw` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/marshmallow_icon.png"
            alt=""
            className="_marshmallow"
            placeholder="tracedSVG"
            style={{ width: `3vw`, margin: `5vh 0 0 -2vw` }}
            imgStyle={{ filter: `invert(100%)` }}
          />
        </StyledStackIcon>
        <StyledStackIcon>
          <StaticImage
            src="../assets/Flask_logo.png"
            alt=""
            placeholder="tracedSVG"
            style={{ width: `10vw` }}
            imgStyle={{ filter: `invert(90%)` }}
            className="_flask"
          />
        </StyledStackIcon>
      </StyledBackEndIconContainer>
    </StyledPancakeContainer>
  )
}

export default PancakeComponent
