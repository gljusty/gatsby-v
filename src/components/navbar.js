import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const StyledNav = styled.div`
position: sticky;
top: 0%;
display: inline-flex;
left: 80%;
`

const NavBar = () => {
    return (
        <StyledNav>
            <Link to="/" style={{color: `white`, textDecoration: `none`, margin: `1rem`}}>
                Home
            </Link>
        
        
            <Link to="/projects" style={{color: `white`, textDecoration: `none`, margin: `1rem`}}>
                Projects
            </Link>
        </StyledNav>
    )
}

export default NavBar