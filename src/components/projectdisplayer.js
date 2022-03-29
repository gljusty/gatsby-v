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
                const line = new LeaderLine(start, ends[end], {hide: true, color: `aquamarine`, startSocket: `left`, endSocket: `right`, path: `fluid`, endPlug: `behind`, animOptions: {duration: 50}})
                const eline = document.querySelector('.leader-line:last-of-type')
                eline.style.zIndex = -1
                this.setState({lines: [...this.state.lines, line]})
                line.show('draw')
              }
              catch {
                //dont do anything
              }
            }, 2000)
          }  
        }
      }
      this.setState({initial: false})
    })
    .catch(error => console.error(error));
  }
  componentWillUnmount() {
    const re = this.state.repos
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
              <StyledListItem className="plitem animate__animated animate__fadeInDown animate__faster" key={item.id}>
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
min-width: 3.5vw;
width: fit-content;
border-radius: 8px;
background-color: slategrey;
white-space: nowrap;
`

const StyledProjectList = styled.div`
position: absolute;
top: 0;
left: 0;
margin-top: 5vh;
margin-left: 5vw;
overflow: scroll;
border-radius: 8px;
scrollbar-width: none;
min-width: 25vw;
min-height: 50vh;
display: grid;
grid-template-columns: auto;
grid-auto-rows: 12vw;
grid-auto-flow: row dense;
`

const StyledListItem = styled.div`
scrollbar-width: none;
display: block;
overflow: scroll;
white-space: wrap;
text-align: justified;
height: 10vh;
min-height: 5vh;
max-height: 10vh;
width: 20vw;
min-width: 20vw;
max-width: 25vw;
padding: 1vh 1vw;
background: linear-gradient(33deg, rgba(0,0,0,0.5), #1b3445);
border-radius: 8px;
color: white;
transition: transform 250ms linear;  
  &:hover {
    transform: scale(1.25);
  }
`
const StyledProjectTitle = styled.h1`
scrollbar-width: none;
display: block;
width: fit-content;
line-height: 1.5em;
overflow: scroll;
`

const StyledGitHubLink = styled.a`
background-color: slategrey;
padding: 0.1vw 0.25vw;
border-radius: 8px;
display: flex;
font-size: 0.775em;
font-family: 'Courier';
margin: 0;
color: white;
text-decoration: none;
float: right;
top: 0;
margin-right: 1.8em;
transition: background-color linear 250ms;
  &:hover {
    background-color: lightblue;
  }
`

export default ProjectDisplay