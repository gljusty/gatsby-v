import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const StyledNav = styled.div`
font-size: 1em;
font-family: 'Courier';
position: sticky;
display: flex;
float: right;
top: 10%;
margin-right: 12%;
justify-content: space-between;
`

const StyledNavLink = styled.div`
color: whitesmoke;
text-decoration: none;
    &:hover {
        transform: scale(1.1);
        transition: transform 250ms linear;
    }
`

const NavBar = () => {
    return (
        <StyledNav>
            <StyledNavLink as={Link} to='/'>
                Home
            </StyledNavLink>
            <span> | </span>
            <StyledNavLink as={Link} to='/projects' id='project_link'>
                Projects
            </StyledNavLink>
            <span> | </span>
            <StyledNavLink as={Link} to='/resume'>
                Resume
            </StyledNavLink>
        </StyledNav>
    )
}

export default NavBar