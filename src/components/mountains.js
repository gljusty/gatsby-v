import * as React from "react";
import styled from "styled-components";

class Mountains extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const houses = Array.from(document.querySelectorAll('.house'))
        //console.log(houses)
        for (let house in houses) {
            houses[house].addEventListener('animationend', function() {
                houses[house].classList.remove('animate__animated')
            }, false)
        }
    }
    
    render() {
        return (
            <div style={{position: `absolute`, width: `100%`, height: `100%`, bottom: `0`, pointerEvents: `none`}}>
                <Mountain id="mountain_one" className="big-background"></Mountain>
                <MountainTwo id="mountain_two"></MountainTwo>
                <MountainThree id="mountain_three"></MountainThree>
                <MountainFour id="mountain_four"></MountainFour>
                <MountainFive id="mountain_five"></MountainFive>
                <MountainSix id="mountain_six"></MountainSix>
                <MountainSeven id="mountain_seven"></MountainSeven>
                <HouseOne className="house animate__animated animate__fadeInDownBig animate__slower"></HouseOne>
                <HouseTwo className="house animate__animated animate__fadeInDownBig animate__delay-2s animate__slower"></HouseTwo>
                <HouseThree className="house animate__animated animate__fadeInDownBig animate__delay-2s"></HouseThree>
                <BuildingOne className="house animate__animated animate__fadeInDownBig animate__slower"></BuildingOne>
                <BuildingTwo className="house animate__animated animate__fadeInDownBig animate__delay-2s animte__slower"></BuildingTwo>
                <BuildingThree className="house animate__animated animate__fadeInDownBig animate__delay-3s"></BuildingThree>
            </div>
        )
    }
}

export default Mountains


const Mountain = styled.div`
position: absolute;
background: linear-gradient(360deg, rgba(0,0,0,1) 40%, rgba(225,225,225,1));
z-index: 1;
width: 50%;
left: 70%;
bottom: 0;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
height: 30%;
`

const MountainTwo = styled.div`
position: absolute;
background: linear-gradient(350deg, rgba(0,0,0,1) 5%, #3e2723 55%, #4A332D 60%, rgba(225,225,225,1) 100%);
z-index: 2;
width: 30%;
height: 15%;
left: 80%;
bottom: 0;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const MountainThree = styled.div`
position: absolute;
z-index: -1;
left: 66.5%;
bottom: 0;
background: linear-gradient(360deg, rgba(0,0,0,1) 40%, rgba(245,245,245,1));
clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
height: 10%;
width: 10%;
`
const MountainFour = styled.div`
position: absolute;
z-index: 0;
left: 77%;
bottom: 0;
background: linear-gradient(360deg, rgba(0,0,0,1) 20%, rgba(245,245,245,1));
clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
height: 20%;
width: 20%;
`

const MountainFive = styled.div`
position: absolute;
z-index: 1;
left: 85%;
bottom: 0;
clip-path: polygon(0% 100%, 12% 27%, 37% 4%, 70% 14%, 86% 44%, 96% 100%, 50% 100%);
background: linear-gradient(-20deg, rgba(0,0,0,1) 5%, #3e2723 35%, #4A332D 45%, rgba(245,245,245,1));
height: 25%;
width: 20%;
`

const MountainSix = styled.div`
clip-path: polygon(1% 100%, 29% 17%, 59% 33%, 73% 1%, 100% 100%);
background: linear-gradient(-20deg, rgba(0,0,0,1) 5%, #3e2723 35%, #4A332D 45%, rgba(245,245,245,1));
height: 22%;
width: 20%;
position: absolute;
bottom: 0;
left: 91.5%;
z-index: 2;
`

const MountainSeven = styled.div`
position: absolute;
background: linear-gradient(350deg, rgba(0,0,0,1) 5%, #3e2723 55%, #4A332D 60%, rgba(225,225,225,1) 100%);
z-index: 2;
width: 12%;
height: 8%;
left: 70%;
bottom: 0;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const HouseOne = styled.div`
clip-path: polygon(20% 100%, 17% 45%, 50% 3%, 69% 32%, 70% 26%, 76% 26%, 78% 44%, 75% 100%);
background-color: slategrey;
height: 1.8%;
width: 1.6%;
position: absolute;
bottom: 0;
left: 65%;
z-index: 1;
`
const HouseTwo = styled.div`
clip-path: polygon(20% 100%, 17% 45%, 50% 3%, 69% 32%, 70% 26%, 76% 26%, 78% 44%, 75% 100%);
background-color: skyblue;
height: 1.5%;
width: 1.2%;
position: absolute;
bottom: 0;
left: 68%;
z-index: 1;
`

const HouseThree = styled.div`
clip-path: polygon(20% 100%, 17% 45%, 50% 3%, 69% 32%, 70% 26%, 76% 26%, 78% 44%, 75% 100%);
background-color: black;
height: 1.8%;
width: 1.8%;
position: absolute;
bottom: 0;
left: 65.5%;
z-index: -1;
`

const BuildingOne = styled.div`
clip-path: polygon(47% 0, 45% 98%, 62% 98%, 62% 47%, 73% 47%, 73% 77%, 51% 78%, 45% 100%, 100% 100%, 100% 0%);
background-color: black;
height: 3%;
width: 2%;
position: absolute;
bottom: 0;
left: 66%;
z-index: 2;
`

const BuildingTwo = styled.div`
clip-path: polygon(47% 0, 45% 98%, 62% 98%, 62% 47%, 73% 47%, 73% 77%, 51% 78%, 45% 100%, 100% 100%, 100% 0%);
background-color: rgba(10,10,10,1);
height: 3%;
width: 2%;
position: absolute;
bottom: 0;
left: 63.5%;
z-index: 2;
`
const BuildingThree = styled.div`
clip-path: polygon(47% 0, 45% 98%, 62% 98%, 62% 47%, 73% 47%, 73% 77%, 51% 78%, 45% 100%, 100% 100%, 100% 0%);
background-color: gold;
height: 20px;
width: 15px;
position: absolute;
bottom: 0;
left: 64%;
z-index: 3;
`
