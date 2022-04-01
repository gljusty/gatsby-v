import * as React from "react"
import styled from "styled-components"

const StyledResumeContainer = styled.div`
  @media (max-width: 300px) {
    margin: auto auto;
    width: 100vw;
  }

  @media (max-width: 768px) {
    margin: 25vh 5vw;
    width: 100vw;
  }
  background-color: transparent;
  border-radius: 8px;
  padding: 0;
  margin: 25vh 25vw;
  position: relative;
  display: block;
  min-height: 50vh;
  height: fit-content;
  width: fit-content;
  max-height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
`
const StyledResumeSectionTitle = styled.h1`
  padding-top: 1vh;
  padding-bottom: 2vh;
  text-weight: bolder;
  scrollbar-width: none;
`

const StyledResumeSection = styled.section`
  margin: 20px;
  overflow: hidden scroll;
  scrollbar-width: none;
  border-radius: 8px;
  text-align: center;
  height: 10vh;
  width: 30vw;
  min-width: 240px;
  transition: all 250ms linear;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), #1b3445);
  &:hover {
    height: 30vh;
    background-color: rgba(1, 1, 1, 1);
  }
`

const StyledResumeContent = styled.section`
  white-space: pre-wrap;
`

const StyledSkillBadge = styled.div`
  border-radius: 8px;
  background: radial-gradient(ellipse at bottom, slategrey, #1b3445);
  font-family: "Courier";
  text-align: center;
  padding: 1vh 1vw;
  margin: 2px 2px;
  width: fit-content;
  display: inline-flex;
`

const StyledTimeStamp = styled.h6`
  margin-top: 100px;
  text-align: center;
`

const ResumeDisplay = () => {
  React.useEffect(() => {
    // TODO: draw lines
  })
  return (
    <StyledResumeContainer className="animate__animated animate__fadeInDownBig">
      <StyledResumeSection className="_section">
        <StyledResumeSectionTitle>Bio</StyledResumeSectionTitle>
      </StyledResumeSection>
      <StyledResumeSection className="_section">
        <StyledResumeSectionTitle>Skills</StyledResumeSectionTitle>

        <StyledSkillBadge> Vue </StyledSkillBadge>
        <StyledSkillBadge> React </StyledSkillBadge>
        <StyledSkillBadge> Flask </StyledSkillBadge>
        <StyledSkillBadge> RESTful APIs </StyledSkillBadge>
        <StyledSkillBadge> Product Development </StyledSkillBadge>
        <StyledSkillBadge> Python </StyledSkillBadge>
        <StyledSkillBadge> Javascript </StyledSkillBadge>
        <StyledSkillBadge> HTML/CSS </StyledSkillBadge>
      </StyledResumeSection>
      <StyledResumeSection className="_section">
        <StyledResumeSectionTitle>Experience</StyledResumeSectionTitle>
        <StyledResumeContent>
          <h2>Self-Employed @ _Flax & Jottr</h2>
          <StyledTimeStamp>Dec 2020 - Current</StyledTimeStamp>
        </StyledResumeContent>
        <StyledResumeContent>
          <h2>IT Generalist @ Technology Helpers</h2>
          <h6>Sep 2021 - Dec 2021</h6>
        </StyledResumeContent>
        <StyledResumeContent>
          <h2>Founder @ 303 CBD</h2>
          <h6>Sep 2017 - Mar 2020</h6>
        </StyledResumeContent>
      </StyledResumeSection>
      <StyledResumeSection className="_section">
        <StyledResumeSectionTitle>Education</StyledResumeSectionTitle>
        <StyledResumeContent>
          <h4>Chemistry | University of Colorado Boulder</h4>
          <h4>IT Support Professional Certificate | Google</h4>
          <h6>
            https://www.credly.com/badges/4cf00abb-4c9b-4ecc-845a-f2515b097e0c/public_url
          </h6>
          <h4>IT Automation with Python Professional Certificate | Google</h4>
          <h6>
            https://www.credly.com/badges/eaa1d0f9-eacd-440d-ac2e-b532d66aa39f/public_url
          </h6>
          <h4>Python 3 Specialization Certificate | University of Michigan</h4>
          <h6>https://coursera.org/share/b0c48ecb2c0378a3c8dbfb69c25907c7</h6>
        </StyledResumeContent>
      </StyledResumeSection>
    </StyledResumeContainer>
  )
}

export default ResumeDisplay
