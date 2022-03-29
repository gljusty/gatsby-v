import * as React from "react";
import styled from "styled-components";
import LeaderLine from "leader-line-new";

class ProjectDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      house_location: this.props.house_location,
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
        this.setState(state => { return {repos: Array.from(data)}})
    })
    .then( () => {
      if (typeof window !== undefined) {
        const start = document.getElementById('house_one')
        const ends = Array.from(document.querySelectorAll('.plitem'))
        console.log(ends)
        for (let end in ends) {
          if (this.state.initial == true) {
            setTimeout(() => {
              const line = new LeaderLine(start, ends[end], {hide: true, color: `aquamarine`, startSocket: `left`,endSocket: `bottom`, path: `magnet`, endPlug: `behind`})
              const eline = document.querySelector('.leader-line:last-of-type')
              eline.style.zIndex = -1
              this.setState({lines: [...this.state.lines, line]})
              line.show('draw')
            }, 2000)
          }  
        }
      }
      this.state.initial = false;
    })
    .catch(error => console.error(error));
  }
  componentWillUnmount() {
    const lines = this.state.lines
    console.log(lines)
    for (let line in lines) {
      lines[line].remove()
    }

  }
  render() {
    return (
      <StyledProjectList id="project_list" className="animate__animated animate__fadeInLeftBig">
          {this.state.repos.map(
              (item) => 
              { return (
              <StyledListItem className="plitem animate__animated animate__fadeInDown animate__slower" key={item.id}>
                <StyledGitHubLink target="_blank" href={item.html_url}>GitHub</StyledGitHubLink>
                <StyledProjectTitle>
                  {item.full_name.replace('gljusty', '')}
                </StyledProjectTitle>
                <div style={{overflow: `scroll`, scrollbarWidth: `none`}}>
                  {item.description}
                </div>
                <div style={{display: `flex`, justifyContent: `space-around`, padding: `0.25em`, marginTop: `0.05em`, marginBottom: `2em`}}>
                  {item.topics.map(
                    (topic) =>
                    { return (
                      <div key={topic} style={{ fontSize: `0.6em`,
                      fontFamily: `Courier`,
                      marginLeft: `3%`,
                      marginRight: `3%`,
                      minWidth:`3.5vw`,
                      width: `fit-content`,
                      borderRadius: `8px`,
                      backgroundColor: `slategrey`,
                      whiteSpace:`nowrap`}}>
                        {topic}
                      </div>
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
border-radius: 8px;
background-color: transparent;
overflow-y: scroll;
scrollbar-width: none;
margin: 25vh 25vw;
min-width: fit-content;
min-height: fit-content;
max-width: 50w;
max-height: 50vh;
display: grid;
grid-template-columns: auto auto;
grid-auto-rows: 12em;
grid-auto-flow: row dense;
justify-content: space-around;
`

const StyledListItem = styled.div`
scrollbar-width: none;
display: block;
overflow: scroll;
white-space: wrap;
text-align: center;
max-height: 10em;
width: 20em;
min-width: fit-content;
max-width: 25em;
max-height: 8em;
margin: 1em;
padding: 2.25%;
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
margin-right: 1.8em;
transition: background-color linear 250ms;
  &:hover {
    background-color: lightblue;
  }
`

export default ProjectDisplay