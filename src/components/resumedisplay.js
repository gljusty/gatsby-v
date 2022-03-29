import React, { useState } from 'react';
import styled from 'styled-components';

const StyledResumeContainer = styled.div`
opacity: 80%;
padding: 0;
margin: auto auto;
position: absolute;
top: 0;
left: 0;
height: 50%;
width: 50%;
`

const ResumeDisplay = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <StyledResumeContainer>
    </StyledResumeContainer>
  );
}


export default ResumeDisplay