import * as React from "react"
import styled from "styled-components"

const Mountains = () => {
  return (
    <div
      style={{
        position: `absolute`,
        width: `100vw`,
        height: `100vh`,
        bottom: `0`,
        left: `0`,
        pointerEvents: `none`,
        overflow: `auto`,
      }}
    >
      <Mountain id="mountain_one" className="_mountain"></Mountain>
      <MountainTwo id="mountain_two" className="_mountain"></MountainTwo>
      <MountainThree id="mountain_three" className="_mountain"></MountainThree>
      <MountainFour id="mountain_four" className="_mountain"></MountainFour>
      <MountainFive id="mountain_five" className="_mountain"></MountainFive>
      <MountainSix id="mountain_six" className="_mountain"></MountainSix>
      <MountainSeven id="mountain_seven" className="_mountain"></MountainSeven>
      <HouseOne id="house_one" className="house"></HouseOne>
      <HouseTwo id="house_two" className="house"></HouseTwo>
      <HouseThree id="house_three" className="house"></HouseThree>
      <BuildingOne id="bldg_one" className="house"></BuildingOne>
      <BuildingTwo id="bldg_two" className="house"></BuildingTwo>
      <BuildingThree id="bldg_three" className="house"></BuildingThree>
    </div>
  )
}

export default Mountains

const Mountain = styled.div`
  position: fixed;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 40%,
    rgba(225, 225, 225, 1)
  );
  z-index: 1;
  width: 30vw;
  height: 30vh;
  left: 80vw;
  bottom: 0;
  clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const MountainTwo = styled.div`
  position: fixed;
  background: linear-gradient(
    350deg,
    rgba(0, 0, 0, 1) 5%,
    #3e2723 55%,
    #4a332d 60%,
    rgba(225, 225, 225, 1) 100%
  );
  z-index: 2;
  width: 15vw;
  height: 18vh;
  left: 80vw;
  bottom: 0;
  clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const MountainThree = styled.div`
  position: fixed;
  z-index: 0;
  left: 70vw;
  bottom: 0;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 40%,
    rgba(245, 245, 245, 1)
  );
  clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
  height: 15vh;
  width: 10vw;
`
const MountainFour = styled.div`
  position: fixed;
  z-index: 0;
  left: 70vw;
  bottom: 0;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(245, 245, 245, 1)
  );
  clip-path: polygon(53% 44%, 0% 100%, 100% 100%);
  height: 22vh;
  width: 20vw;
`

const MountainFive = styled.div`
  position: fixed;
  z-index: 1;
  left: 87.5vw;
  bottom: 0;
  clip-path: polygon(
    0% 100%,
    12% 27%,
    37% 4%,
    70% 14%,
    86% 44%,
    96% 100%,
    50% 100%
  );
  background: linear-gradient(
    -20deg,
    rgba(0, 0, 0, 1) 5%,
    #3e2723 35%,
    #4a332d 45%,
    rgba(245, 245, 245, 1)
  );
  height: 18vh;
  width: 10vw;
`

const MountainSix = styled.div`
  clip-path: polygon(1% 100%, 29% 17%, 59% 33%, 73% 1%, 100% 100%);
  background: linear-gradient(
    -20deg,
    rgba(0, 0, 0, 1) 5%,
    #3e2723 35%,
    #4a332d 45%,
    rgba(245, 245, 245, 1)
  );
  height: 22vh;
  width: 20vw;
  position: fixed;
  bottom: 0;
  left: 90vw;
  z-index: 2;
`

const MountainSeven = styled.div`
  position: fixed;
  background: linear-gradient(
    350deg,
    rgba(0, 0, 0, 1) 5%,
    #3e2723 55%,
    #4a332d 60%,
    rgba(225, 225, 225, 1) 100%
  );
  z-index: 2;
  width: 12vw;
  height: 12vh;
  left: 85vw;
  bottom: 0;
  clip-path: polygon(50% 0, 0% 100%, 100% 100%);
`

const HouseOne = styled.div`
  clip-path: polygon(
    20% 100%,
    17% 45%,
    50% 3%,
    69% 32%,
    70% 26%,
    76% 26%,
    78% 44%,
    75% 100%
  );
  background-color: slategrey;
  height: 1.8vh;
  width: 1.6vw;
  position: fixed;
  bottom: 0;
  left: 65.5vw;
  z-index: 1;
`
const HouseTwo = styled.div`
  clip-path: polygon(
    20% 100%,
    17% 45%,
    50% 3%,
    69% 32%,
    70% 26%,
    76% 26%,
    78% 44%,
    75% 100%
  );
  background-color: skyblue;
  height: 1.5vh;
  width: 1.2vw;
  position: fixed;
  bottom: 0;
  left: 67.5vw;
  z-index: 1;
`

const HouseThree = styled.div`
  clip-path: polygon(
    20% 100%,
    17% 45%,
    50% 3%,
    69% 32%,
    70% 26%,
    76% 26%,
    78% 44%,
    75% 100%
  );
  background-color: black;
  height: 1.8vh;
  width: 1.8vw;
  position: fixed;
  bottom: 0;
  left: 65.5vw;
  z-index: -1;
`

const BuildingOne = styled.div`
  clip-path: polygon(
    47% 0,
    45% 98%,
    62% 98%,
    62% 47%,
    73% 47%,
    73% 77%,
    51% 78%,
    45% 100%,
    100% 100%,
    100% 0%
  );
  background-color: black;
  height: 3vh;
  width: 2vw;
  position: fixed;
  bottom: 0;
  left: 66vw;
  z-index: 0;
`

const BuildingTwo = styled.div`
  clip-path: polygon(
    47% 0,
    45% 98%,
    62% 98%,
    62% 47%,
    73% 47%,
    73% 77%,
    51% 78%,
    45% 100%,
    100% 100%,
    100% 0%
  );
  background-color: rgba(10, 10, 10, 1);
  height: 2vh;
  width: 1.5vw;
  position: fixed;
  bottom: 0;
  left: 64.35vw;
  z-index: -1;
`
const BuildingThree = styled.div`
  clip-path: polygon(
    47% 0,
    45% 98%,
    62% 98%,
    62% 47%,
    73% 47%,
    73% 77%,
    51% 78%,
    45% 100%,
    100% 100%,
    100% 0%
  );
  background-color: gold;
  height: 1.4vh;
  width: 1.5vw;
  position: fixed;
  bottom: 0;
  left: 64.2vw;
  z-index: 3;
`
