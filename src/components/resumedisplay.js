import * as React from "react"
import styled from "styled-components"
import LeaderLine from "leader-line-new"
import { FaCheck } from "@react-icons/all-files/fa/FaCheck"
import { FaVolleyballBall } from "@react-icons/all-files/fa/FaVolleyballBall"
import { FaMountain } from "@react-icons/all-files/fa/FaMountain"
import { FaWrench } from "@react-icons/all-files/fa/FaWrench"
import { GiJeep } from "@react-icons/all-files/gi/GiJeep"
import { GiCook } from "@react-icons/all-files/gi/GiCook"

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
  min-width: 260px;
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
  min-width: 240px;
  height: fit-content;
  transition: all 250ms linear;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), #1b3445);
  &:hover {
    background-color: rgba(1, 1, 1, 1);
    height: fit-content;
  }
  &:first-of-type {
    height: 8vh;
  }
  &:first-of-type:hover {
    height: 25vh;
  }
`

const StyledResumeContent = styled.section`
  white-space: wrap;
`

const StyledBioSection = styled.section`
  display: flex;
  width: fit-content;
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
  margin-top: -2vh;
  text-align: center;
`

const StyledResumeList = styled.ul`
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
  margin: 1vh 10vw;
  text-align: justify;
`

const StyledProjectLink = styled.a`
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: coral;
`

const AltStyledMsg = styled.div`
  @media only screen and (max-width: 768px) {
    top: 17.5vh;
    left: 25vw;
  }
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
  top: 80vh;
  left: 63vw;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 0.5vw;
  z-index: 3;
  display: flex;
  justify-content: center;
  min-width: fit-content;
  width: fit-content;
  height: 5vh;
  font-family: "Courier";
  text-align: center;
  transition: background-color 250ms ease-in-out;
  &:hover {
    background-color: slategrey;
  }
`

class ResumeDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: true,
      lines: [],
    }
  }

  DrawLines = async () => {
    if (this.state.initial === true && typeof window !== "undefined") {
      setTimeout(() => {
        try {
          const start = document.querySelector("._pancake")
          const end = document.querySelector("._beContainer")
          const line = new LeaderLine(start, end, {
            hide: true,
            color: `aquamarine`,
            startSocket: `left`,
            endSocket: `bottom`,
            path: `grid`,
            startPlug: `behind`,
            endPlug: `arrow2`,
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
      }, 2500)
    }
    this.setState({ initial: false })
  }

  CloseMsg = async () => {
    let n = document.getElementById("pdf_message")
    n.remove()
  }

  componentDidMount() {
    //this.DrawLines()
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
        <AltStyledMsg
          className="animate__animated animate__fadeInUp animate__delay-2s"
          id="alt_pdf_message"
        >
          <a
            href="./Simplified_Resume.pdf"
            target="_blank"
            style={{ color: `whitesmoke`, textDecoration: `none` }}
          >
            Need a PDF?
          </a>
        </AltStyledMsg>
        {/* <StyledMsg
          className="animate__animated animate__fadeInUp animate__delay-2s"
          id="pdf_message"
        >
          <FaTimes
            cursor="pointer"
            onClick={this.CloseMsg}
            style={{
              marginTop: `-2vh`,
              marginLeft: `-1vw`,
            }}
          />
          <a
            href="./Simplified_Resume.pdf"
            target="_blank"
            style={{ color: `whitesmoke`, textDecoration: `none` }}
          >
            Looking for a PDF?
          </a>
        </StyledMsg> */}
        <StyledResumeContainer className="animate__animated animate__fadeInDownBig">
          <StyledResumeSection className="_section _bio">
            <StyledResumeSectionTitle>Bio</StyledResumeSectionTitle>
            <StyledResumeContent>
              <div>Bryan Stapleton</div>
              <div>Boulder, CO 80302</div>
              <div>
                <a
                  style={{ color: `aquamarine`, textDecoration: `none` }}
                  href="mailto:b@gljusty.dev"
                >
                  b@gljusty.dev
                </a>
              </div>
              <p>
                Hobbies:
                <section>
                  <GiCook />
                  <FaVolleyballBall />
                  <FaMountain />
                  <GiJeep />
                  <FaWrench />
                </section>
              </p>
            </StyledResumeContent>
            <StyledBioSection></StyledBioSection>
            <StyledBioSection></StyledBioSection>
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
              <StyledResumeList>
                <StyledProjectLink
                  href="https://www.github.com/gljusty/flax"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flax
                </StyledProjectLink>
                <li>Developed a full-stack web application named _Flax.</li>
                <li>
                  Built on a Flask back end with a Vue front end, Flax allows
                  users to anonymously retrieve twitter data and analyze tweet
                  sentiment using NTLK3's VADER to be downloaded and/or fed into
                  an ETL pipeline.
                </li>
                <li>
                  Database in PostgreSQL with ORM handled by SQLAlchemy and
                  Marshmallow.
                </li>
                <li>
                  Deployed on Heroku at{" "}
                  <a
                    style={{ textDecoration: `none`, color: `aquamarine` }}
                    href="https://flax-app.herokuapp.com/app"
                  >
                    https://flax-app.herokuapp.com/app
                  </a>
                </li>
                <StyledProjectLink
                  href="https://www.github.com/gljusty/jottr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jottr
                </StyledProjectLink>
                <li>Chrome/Firefox addon written in Vanilla Javascript.</li>
                <li>
                  Facilitates smooth workflows by providing autosave
                  functionality while living in the User's toolbar, reducing the
                  need for anyone who frequently works in the browser to alt tab
                  between sources of information.
                </li>
              </StyledResumeList>
            </StyledResumeContent>
            <StyledResumeContent>
              <h2>IT Generalist @ Tech Helpers</h2>
              <StyledTimeStamp>Sep 2021 - Dec 2021</StyledTimeStamp>
              <StyledResumeList>
                <li>
                  Supported 700+ configurations spanning 500+ end users across
                  16 clients alongside a small team of techs using the
                  ConnectWise platform.
                </li>
                <li>
                  Interfaced regularly with users to troubleshoot tech-related
                  problems including cloud administration, Office 365, AD,
                  deploying machines and basic networking problems such as DNS
                  issues.
                </li>
                <li>
                  Assisted in implementing standardization across internal
                  documentation, improving accessibility of information and
                  streamlining workflow.
                </li>
              </StyledResumeList>
            </StyledResumeContent>
            <StyledResumeContent>
              <h2>Founder @ 303 CBD</h2>
              <StyledTimeStamp>Sep 2017 - Mar 2020</StyledTimeStamp>
              <StyledResumeList>
                <li>
                  Designed and built manufacturing equipment for processing
                  small batches of raw CBD in the capacity of 1kg/day.
                </li>
                <li>
                  Manufactured and distributed several CBD products in Colorado
                  and Texas under a wholly owned brand, "Exhempt".
                </li>
                <li>
                  Developed branding, web presence via custom ecommerce site and
                  implemented KPI tracking to improve bounce rate on company
                  website by 50% over 2-year period.
                </li>
                <li>
                  Fostered strong relationships with suppliers and customers in
                  both B2B and B2C capacities and engaged in some light
                  consulting to other firms in the hemp industry, primarily in
                  the realm of manufacturing.
                </li>
              </StyledResumeList>
            </StyledResumeContent>
          </StyledResumeSection>
          <StyledResumeSection className="_section">
            <StyledResumeSectionTitle>Education</StyledResumeSectionTitle>
            <StyledResumeContent>
              <h4>Chemistry | University of Colorado Boulder</h4>
              <h4>
                IT Support Professional Certificate | Google{" "}
                <span>
                  <a
                    href="https://www.credly.com/badges/4cf00abb-4c9b-4ecc-845a-f2515b097e0c/public_url"
                    target="_blank"
                    title="test"
                    rel="noreferrer"
                    style={{ color: `aquamarine` }}
                  >
                    <FaCheck />
                  </a>
                </span>
              </h4>
              <h4>
                IT Automation with Python Professional Certificate | Google{" "}
                <span>
                  <a
                    href="https://www.credly.com/badges/eaa1d0f9-eacd-440d-ac2e-b532d66aa39f/public_url"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: `aquamarine` }}
                  >
                    <FaCheck />
                  </a>
                </span>
              </h4>
              <h4>
                Python 3 Specialization Certificate | University of Michigan{" "}
                <span>
                  <a
                    href="https://coursera.org/share/b0c48ecb2c0378a3c8dbfb69c25907c7"
                    target="_blank"
                    title="test"
                    rel="noreferrer"
                    style={{ color: `aquamarine` }}
                  >
                    <FaCheck />
                  </a>
                </span>
              </h4>
            </StyledResumeContent>
          </StyledResumeSection>
        </StyledResumeContainer>
      </>
    )
  }
}

export default ResumeDisplay
