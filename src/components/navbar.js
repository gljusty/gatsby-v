import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const StyledNav = styled.div`
font-family: 'Courier';
position: sticky;
display: flex;
float: right;
top: 10%;
margin-right: 12%;
justify-content: space-between;
`

const StyledNavLink = styled.div`
    &:hover {
        transform: scale(1.2);
        transition: transform 250ms linear;
    }
`

const NavBar = () => {
    return (
        <StyledNav>
            <StyledNavLink>
                <Link to="/" style={{color: `whitesmoke`, textDecoration: `none`}}>
                    Home
                </Link>
            </StyledNavLink>
        
            <StyledNavLink>
                <Link to="/projects" style={{color: `whitesmoke`, textDecoration: `none`}}>
                    Projects
                </Link>
            </StyledNavLink>

            <StyledNavLink>
                <Link to="/resume" style={{color: `whitesmoke`, textDecoration: `none`}}>
                    Resume
                </Link>
            </StyledNavLink>
        </StyledNav>
    )
}

export default NavBar