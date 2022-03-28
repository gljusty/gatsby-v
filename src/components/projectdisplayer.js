import * as React from "react";
import styled from "styled-components";


class ProjectDisplayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }
  componentDidMount() {
      fetch('https://api.github.com/users/gljusty/repos', { 
      headers: {
          'Accept' : 'application/vnd.github.v3+json'
      }})
      .then(response => response.json())
      .then(data => {
          this.setState(state => { return {repos: Array.from(data)}})
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <StyledProjectList>
          {this.state.repos.map(
              (item) => 
              { return (
              <StyledListItem className="animate__animated animate__fadeInLeft">
                <StyledGitHubLink target="_blank" href={item.html_url}>GitHub</StyledGitHubLink>
                <StyledProjectTitle>
                  {item.full_name.replace('gljusty', '')}
                </StyledProjectTitle>
                <div style={{overflow: `scroll`}}>
                  {item.description}
                </div>
                <div style={{display: `inline-flex`}}>
                  {item.topics.map(
                    (topic) =>
                    { return (
                      <div style={{ fontSize: `0.66em`,fontFamily: `Courier`, marginLeft: `3%`, marginRight: `3%`, marginTop: `1vh`, padding: `3%`, borderRadius: `8px`, backgroundColor: `slategrey`}}>{topic}</div>
                    )
                  })
                }
                </div>
              </StyledListItem> 
              )}
            )}
      </StyledProjectList>
    )
  };
}

const StyledProjectList = styled.div`
scrollbar-width: none;
width: 100vw;
height: 100vh;
display: grid;
flex-direction: column;
`

const StyledListItem = styled.div`
scrollbar-width: none;
vertical-align: top;
display: inline-block;
overflow: scroll;
white-space: nowrap;
text-align: center;
width: fit-content;
max-width: 40%;
max-height: 15%;
margin: 1%;
padding: 4.2%;
background-color: rgba(1,1,1,0.65);
border-radius: 8px;
color: white;
    &:hover {
    background-color: gold;
    transition: background-color linear 250ms;
}
`
const StyledProjectTitle = styled.h1`
scrollbar-width: none;
display: inline-block;
width: fit-content;
line-height: 1.3em;
overflow: scroll;
`

const StyledGitHubLink = styled.a`
background-color: slategrey;
padding: 0.25em;
border-radius: 8px;
display: flex;
font-size: 0.775em;
font-family: 'Courier';
margin: 1em;
color: white;
text-decoration: none;
float: right;
top: 0;
margin-right: 0;
  &:hover {
    background-color: lightblue;
    transition: background-color linear 250ms;
  }
`

export default ProjectDisplayer