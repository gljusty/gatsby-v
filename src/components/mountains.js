import * as React from "react";
import styled from "styled-components";

const Mountain = styled.div`
position: absolute;
background: linear-gradient(360deg, rgba(0,0,0,1) 40%, rgba(225,225,225,1));
z-index: 1;
width: 520px;
left: 80%;
bottom: 0;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
height: 320px;
`

const MountainTwo = styled.div`
position: absolute;
background: linear-gradient(350deg, rgba(0,0,0,1) 5%, #3e2723 55%, #4A332D 65%, rgba(225,225,225,1));
border: solid 1px black;
z-index: 2;
width: 168px;
height: 120px;
left: 80%;
bottom: 0;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const MountainThree = styled.div`
position: absolute;
z-index: 0;
left: 75%;
bottom: 0;
background: linear-gradient(360deg, rgba(0,0,0,1) 40%, rgba(245,245,245,1));
clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
height: 100px;
width: 100px;
`
const MountainFour = styled.div`
position: absolute;
z-index: 0;
left: 77%;
bottom: 0;
background: linear-gradient(360deg, rgba(0,0,0,1) 20%, rgba(245,245,245,1));
clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
height: 200px;
width: 200px;
`

const MountainFive = styled.div`
position: absolute;
z-index: 1;
left: 85%;
bottom: 0;
clip-path: polygon(0% 100%, 12% 27%, 37% 4%, 70% 14%, 86% 44%, 96% 100%, 50% 100%);
background: linear-gradient(-20deg, rgba(0,0,0,1) 5%, #3e2723 35%, #4A332D 45%, rgba(245,245,245,1));
height: 225px;
width: 200px;
`

const MountainSix = styled.div`
clip-path: polygon(1% 100%, 29% 17%, 59% 33%, 73% 1%, 100% 100%);
background: linear-gradient(-20deg, rgba(0,0,0,1) 5%, #3e2723 35%, #4A332D 45%, rgba(245,245,245,1));
height: 200px;
width: 200px;
position: absolute;
bottom: 0;
left: 91.5%;
z-index: 2;
`

const HouseOne = styled.div`
clip-path: polygon(20% 100%, 17% 45%, 50% 3%, 69% 32%, 70% 26%, 76% 26%, 78% 44%, 75% 100%);
background-color: slategrey;
height: 22px;
width: 22px;
position: absolute;
bottom: 0;
left: 65%;
z-index: 1;
  &:after {
      position: relative;
      background-color: rgba(225,225,225,0.5);
      top: 0px;
  }
`
const HouseTwo = styled.div`
clip-path: polygon(20% 100%, 17% 45%, 50% 3%, 69% 32%, 70% 26%, 76% 26%, 78% 44%, 75% 100%);
background-color: skyblue;
height: 22px;
width: 22px;
position: absolute;
bottom: 0;
left: 68%;
z-index: 1;
`

const HouseThree = styled.div`
clip-path: polygon(20% 100%, 17% 45%, 50% 3%, 69% 32%, 70% 26%, 76% 26%, 78% 44%, 75% 100%);
background-color: black;
height: 18px;
width: 18px;
position: absolute;
bottom: 0;
left: 67.5%;
z-index: -1;
`

const BuildingOne = styled.div`
clip-path: polygon(47% 0, 45% 98%, 62% 98%, 62% 47%, 73% 47%, 73% 77%, 51% 78%, 45% 100%, 100% 100%, 100% 0%);
background-color: black;
height: 30px;
width: 20px;
position: absolute;
bottom: 0;
left: 66%;
z-index: 2;
  &:hover {
      transition: transform 250ms ease-in-out;
      transform: skewX(5deg);
  }
`

const BuildingTwo = styled.div`
clip-path: polygon(47% 0, 45% 98%, 62% 98%, 62% 47%, 73% 47%, 73% 77%, 51% 78%, 45% 100%, 100% 100%, 100% 0%);
background-color: rgba(10,10,10,1);
height: 30px;
width: 20px;
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
  ^:after {
    clip-path: polygon(11% 0, 17% 100%, 46% 100%, 36% 13%, 63% 16%, 66% 46%, 39% 43%, 38% 100%, 89% 100%, 81% 0);
    background-color: black;
    height: 20px;
    width: 15px;
    position: absolute;
    bottom: 0;
    left: 64.25%;
    z-index: 3;

  }
`

const Mountains = () => {
    return (
        <div style={{position: `relative`, width: `140%`, height: `100vh`, bottom: `0`}}>
            <Mountain id="mountain_one" className="big-background"></Mountain>
            <MountainTwo id="mountain_two"></MountainTwo>
            <MountainThree id="mountain_three"></MountainThree>
            <MountainFour id="mountain_four"></MountainFour>
            <MountainFive id="mountain_five"></MountainFive>
            <MountainSix id="mountain_six"></MountainSix>
            <HouseOne className="animate__animated animate__fadeIn"></HouseOne>
            <HouseTwo className="animate__animated animate__fadeIn"></HouseTwo>
            <HouseThree className="animate__animated animate__fadeIn"></HouseThree>
            <BuildingOne className="animate__animated animate__fadeIn"></BuildingOne>
            <BuildingTwo className="animate__animated animate__fadeIn"></BuildingTwo>
            <BuildingThree className="animate__animated animate__fadeIn"></BuildingThree>
        </div>
    )
}

export default Mountains
