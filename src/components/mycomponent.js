import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 20px;
    width: 80px;
    background-color: black;
    text-align: center;
    color: whitesmoke;
    line-height: 12px;
    font-size: 12px;
    place-content: center;
    `

const MyComponent = () => {
    return (
        <StyledButton title="test title">test</StyledButton>
    )
}

export default MyComponent