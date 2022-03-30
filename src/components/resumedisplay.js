import * as React from 'react';
import styled from 'styled-components';

const StyledResumeContainer = styled.div`
background-color: rgba(100,10,10,0.25);
border-radius: 8px;
padding: 0;
margin: 25vh 25vw;
position: relative;
display: block;
height: 50vh;
width: 50vw;
overflow-y: scroll;
scrollbar-width: none;
`
const StyledResumeSectionTitle = styled.h1`
padding-top: 1vh;
text-weight: bold;
scrollbar-width: none;
`

const StyledResumeSection = styled.section`
margin: 20px;
overflow: hidden scroll;
scrollbar-width: none;
border-radius: 8px;
text-align: center;
height: 10vh;
transition: all 250ms linear;
background-color: rgba(1,1,1,0.75);
  &:hover {
    height: 20vh;
    background-color: rgba(1,1,1,1);
}
`


const ResumeDisplay = () => {
  React.useEffect(() => {

  })
  return (
    <StyledResumeContainer className='animate__animated animate__fadeInDownBig'>
      <StyledResumeSection className='_section'>
        <StyledResumeSectionTitle>
          Skills
        </StyledResumeSectionTitle>
        
      </StyledResumeSection>
      <StyledResumeSection className='_section'>
      <StyledResumeSectionTitle>
          Experience
      </StyledResumeSectionTitle>
        Test Section 2. Test paragraph of content. Test sentence of content. Test sentence number 4. 10239  ` ` special characters $$#24**7468&&
        <h1>
          IT Support Specialist | Technology Helpers
        </h1>
        <h3>
          Sep 2021 - Dec 2021
        </h3>
        <p>

        </p>
        
      </StyledResumeSection>
      <StyledResumeSection className='_section'>
      <StyledResumeSectionTitle>
          Education
      </StyledResumeSectionTitle>
        Test Section 3
      </StyledResumeSection>
    </StyledResumeContainer>
  );
}


export default ResumeDisplay