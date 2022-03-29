import * as React from "react"
import styled from "styled-components"
import 'animate.css'
import './stars.scss'

const BackgroundStar = styled.div`
position: absolute;
border-radius: 50%;
top: 0;
left: 0;
background: whitesmoke;
`

const ShootingStars = styled.div`
position: absolute;
`

const Stars = () => {
    return (
        <div>
            <BackgroundStar className="stars_layer_one"/>
            <BackgroundStar className="stars_layer_two"/>
            <BackgroundStar className="stars_layer_three"/>
            <ShootingStars className="shooting_stars">
                <div className='shooting_star'></div>
                <div className='shooting_star'></div>
                <div className='shooting_star'></div>
                <div className='shooting_star'></div>
                <div className='shooting_star'></div>
                <div className='shooting_star'></div>
                <div className='shooting_star'></div>
            </ShootingStars>
        </div>
    )
}

export default Stars