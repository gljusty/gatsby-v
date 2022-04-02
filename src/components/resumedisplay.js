import * as React from "react"
import styled from "styled-components"
import LeaderLine from "leader-line-new"

const StyledResumeContainer = styled.div`
  @media (max-width: 300px) {
    margin: 25vh auto;
    width: 100vw;
  }
  @media (max-width: 820px) {
    margin: 25vh 5vw;
    width: 100vw;
  }
  background-color: transparent;
  border-radius: 8px;
  padding: 0;
  margin: auto auto;
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: dense;
  min-height: 50vh;
  min-width: 265px;
  height: fit-content;
  width: fit-content;
  max-height: 100vh;
  max-width: 50vw;
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
  margin-top: 1vh;
  overflow-y: scroll;
  scrollbar-width: none;
  border-radius: 8px;
  text-align: center;
  min-width: 260px;
  transition: all 250ms linear;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), #1b3445);
  &:hover {
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
  margin: 1vh 1vw;
  width: fit-content;
  display: inline-flex;
`

const StyledTimeStamp = styled.h6`
  margin-top: 100px;
  text-align: center;
`

class ResumeDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: true,
      lines: [],
    }
  }

  componentDidMount() {
    if (this.state.initial === true) {
      setTimeout(() => {
        try {
          const start = document.querySelector("._pancake")
          const end = document.querySelector("._flask")
          const line = new LeaderLine(start, end, {
            hide: true,
            color: `aquamarine`,
            startSocket: `left`,
            endSocket: `bottom`,
            path: `grid`,
            startPlug: `behind`,
            endPlug: `behind`,
            startSocketGravity: 25,
            endSocketGravity: 25,
          })
          const eline = document.querySelector(".leader-line:last-of-type")
          eline.style.zIndex = -1
          this.setState({ lines: [...this.state.lines, line] })
          line.show("draw")
        } catch {
          //dont do anything
        }
      }, 1000)
    }
    this.setState({ initial: false })
  }

  componentWillUnmount() {
    const lines = this.state.lines
    for (let line in lines) {
      lines[line].remove()
    }
  }

  render() {
    return (
      <>
        <StyledResumeContainer className="animate__animated animate__fadeInDownBig">
          <StyledResumeSection className="_section _bio">
            <StyledResumeSectionTitle>Bio</StyledResumeSectionTitle>
          </StyledResumeSection>
          <StyledResumeSection className="_section">
            <StyledResumeSectionTitle>Skills</StyledResumeSectionTitle>
            <StyledSkillBadge> Vue </StyledSkillBadge>
            <StyledSkillBadge> React </StyledSkillBadge>
            <StyledSkillBadge> Flask </StyledSkillBadge>
            <StyledSkillBadge> Bootstrap </StyledSkillBadge>
            <StyledSkillBadge> RESTful APIs </StyledSkillBadge>
            <StyledSkillBadge> Product Development </StyledSkillBadge>
            <StyledSkillBadge> Python </StyledSkillBadge>
            <StyledSkillBadge> Javascript </StyledSkillBadge>
            <StyledSkillBadge> HTML/CSS </StyledSkillBadge>
            <StyledSkillBadge> NLP </StyledSkillBadge>
          </StyledResumeSection>
          <StyledResumeSection className="_section">
            <StyledResumeSectionTitle>Experience</StyledResumeSectionTitle>
            <StyledResumeContent>
              <h2>Self-Employed @ Flax & Jottr</h2>
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
                <a
                  href="https://www.credly.com/badges/4cf00abb-4c9b-4ecc-845a-f2515b097e0c/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  Verification
                </a>
              </h6>
              <h4>
                IT Automation with Python Professional Certificate | Google
              </h4>
              <h6>
                <a
                  href="https://www.credly.com/badges/eaa1d0f9-eacd-440d-ac2e-b532d66aa39f/public_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  Verification
                </a>
              </h6>
              <h4>
                Python 3 Specialization Certificate | University of Michigan
              </h4>
              <h6>
                <a
                  href="https://coursera.org/share/b0c48ecb2c0378a3c8dbfb69c25907c7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Verification
                </a>
              </h6>
            </StyledResumeContent>
          </StyledResumeSection>
        </StyledResumeContainer>
      </>
    )
  }
}

export default ResumeDisplay
