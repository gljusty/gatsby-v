import * as React from "react";
import styled from "styled-components";
import LeaderLine from "leader-line-new";

class ProjectDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      initial: true,
      lines: []
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/gljusty/repos', { 
    headers: {
        'Accept' : 'application/vnd.github.v3+json'
    }})
    .then(response => response.json())
    .then(data => {
        this.setState({repos: Array.from(data)})
    })
    .then( () => {
      if (typeof window !== undefined) {
        const start = document.getElementById('house_one')
        const ends = Array.from(document.querySelectorAll('.plitem'))
        for (let end in ends) {
          if (this.state.initial === true) {
            setTimeout(() => {
              try {
                const line = new LeaderLine(start, ends[end], {hide: true, color: `aquamarine`, startSocket: `left`, endSocket: `right`, path: `fluid`, endPlug: `behind`, animOptions: ['duration: 5000']})
                const eline = document.querySelector('.leader-line:last-of-type')
                eline.style.zIndex = -1
                this.setState({lines: [...this.state.lines, line]})
                line.show('draw')
              }
              catch {
                //dont do anything
              }
            }, 750)
          }  
        }
      }
      this.setState({initial: false})
    })
    .catch(error => console.error(error));
  }
  componentWillUnmount() {
    const lines = this.state.lines
    for (let line in lines) {
      lines[line].remove()
    }
  }
  render() {
    return (
      <StyledProjectList id="project_list">
          {this.state.repos.map(
              (item) => 
              { return (
              <StyledListItem className="plitem animate__animated animate__fadeInLeft animate__faster" key={item.id}>
                <StyledGitHubLink target="_blank" href={item.html_url}>GitHub</StyledGitHubLink>
                <StyledProjectTitle>
                  {item.full_name.replace('gljusty', '')}
                </StyledProjectTitle>
                <div style={{overflow: `scroll`, scrollbarWidth: `none`, marginTop: `7vh`}}>
                  {item.description}
                </div>
                <div style={{display: `flex`, justifyContent: `space-around`, padding: `0.25em`, marginTop: `0.5vh`, marginBottom: `2vh`, textAlign: `center`}}>
                  {item.topics.map(
                    (topic) =>
                    { return (
                      <StyledTopicBadge key={topic}>
                        {topic}
                      </StyledTopicBadge>
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

const StyledTopicBadge = styled.div`
font-size: 0.6em;
font-family: 'Courier';
min-width: 2vw;
padding-left: 2px;
padding-right: 2px;
width: fit-content;
border-radius: 8px;
background-color: slategrey;
white-space: nowrap;
`

const StyledProjectList = styled.div`
@media (max-width: 768px) {
  margin: 20vh 0 0 5vh;
}
position: relative;
margin: 20vh 0 0 10vw;
overflow: scroll;
border-radius: 8px;
scrollbar-width: none;
width: fit-content;
height: fit-content;
display: grid;
grid-template-columns: auto;
grid-template-rows: auto auto auto auto;
grid-auto-rows: 15vh;
grid-auto-columns: 25vw;
grid-auto-flow: dense;
`

const StyledListItem = styled.div`
scrollbar-width: none;
display: block;
overflow: scroll;
white-space: wrap;
text-align: center;
height: 10vh;
min-height: 5vh;
flex-direction: vertical;
width: 20vw;
min-width: 200px;
max-width: 25vw;
padding: 1vh 1vw;
background: linear-gradient(33deg, rgba(0,0,0,0.5), #1b3445);
border-radius: 8px;
color: white;
transition: all 100ms linear;  
  &:hover {
    height: 27.5vh;
  }
`
const StyledProjectTitle = styled.h1`
scrollbar-width: none;
display: block;
width: fit-content;
line-height: 1.5em;
overflow: scroll;
whitespace: nowrap;
`

const StyledGitHubLink = styled.a`
background-color: slategrey;
padding: 0.1vw 0.25vw;
border-radius: 8px;
display: flex;
font-size: 0.8em;
font-family: 'Courier';
margin: 0;
color: white;
text-decoration: none;
float: right;
top: 0;
margin-right: 0.4vw;
transition: background-color linear 250ms;
  &:hover {
    background-color: lightblue;
  }
`

export default ProjectDisplay