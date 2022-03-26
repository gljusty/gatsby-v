import * as React from "react";
import styled from "styled-components";
import "./mountains.scss";

const Mountain = styled.div`
position: absolute;
background: linear-gradient(360deg, rgba(0,0,0,1) 40%, rgba(225,225,225,1));
z-index: 1;
width: 520px;
left: 80%;
bottom: -97%;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
height: 320px;
`

const MountainTwo = styled.div`
position: absolute;
background: linear-gradient(350deg, #3e2723 55%, #4A332D 65%, rgba(225,225,225,1));
border: solid 1px black;
z-index: 2;
width: 168px;
height: 120px;
left: 80%;
bottom: -97%;
clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const MountainThree = styled.div`
position: absolute;
z-index: 0;
left: 75%;
bottom: -97%;
background: linear-gradient(360deg, rgba(0,0,0,1) 40%, rgba(225,225,225,1));
clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
height: 100px;
width: 100px;
`
const MountainFour = styled.div`
position: absolute;
z-index: 0;
left: 77%;
bottom: -97%;
background: linear-gradient(360deg, rgba(0,0,0,1) 20%, rgba(225,225,225,1));
clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
height: 200px;
width: 200px;
`

const MountainFive = styled.div`
position: absolute;
z-index: 1;
left: 85%;
bottom: -97%;
clip-path: polygon(0% 100%, 12% 27%, 37% 4%, 70% 14%, 86% 44%, 96% 100%, 50% 100%);
background: linear-gradient(-20deg, rgba(0,0,0,1) 5%, #3e2723 35%, #4A332D 45%, rgba(225,225,225,1));
height: 225px;
width: 200px;
`

const MountainSix = styled.div`
clip-path: polygon(1% 100%, 29% 17%, 59% 33%, 73% 1%, 100% 100%);
background: linear-gradient(-20deg, #3e2723 35%, #4A332D 45%, rgba(225,225,225,1));
height: 200px;
width: 200px;
position: absolute;
bottom: -97%;
left: 91.5%;
z-index: 2;
`

const Mountains = () => {
    return (
        <div>
            <Mountain id="mountain_one" className="big-background"></Mountain>
            <MountainTwo id="mountain_two"></MountainTwo>
            <MountainThree id="mountain_three"></MountainThree>
            <MountainFour id="mountain_four"></MountainFour>
            <MountainFive id="mountain_five"></MountainFive>
            <MountainSix id="mountain_six"></MountainSix>
        </div>
    )
}

export default Mountains
