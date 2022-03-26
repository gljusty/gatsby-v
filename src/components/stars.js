import * as React from "react"
import styled from "styled-components"
import './stars.scss'

const BackgroundStar = styled.div`
position: absolute;
top: 0;
left: 0;
background: whitesmoke;
height: 1px;
width: 1px;
border-radius: 50%;`

const Stars = () => {
    return (
        <div>
            <BackgroundStar className="stars_layer_one"/>
            <BackgroundStar className="stars_layer_two"/>
            <BackgroundStar className="stars_layer_three"/>
        </div>
    )
}

export default Stars