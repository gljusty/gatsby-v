import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    const house_one = document.getElementById("house_one")
    const house_two = document.getElementById("house_two")
    const house_three = document.getElementById("house_three")
    const bldg_one = document.getElementById("bldg_one")
    const bldg_two = document.getElementById("bldg_two")
    const bldg_three = document.getElementById("bldg_three")

    const houses = Array.from(document.querySelectorAll(".house"))
    for (const house in houses) {
      console.log(house)
      houses[house].classList.add("animate__animated", "animate__fadeInDownBig")
    }
    house_one.classList.add("animate__slow", "animate__lightSpeedInLeft")
    house_two.classList.add("animate__slower", "animate__fadeInLeftBig")
    house_three.classList.add("animate__fadeInLeftBig", "animate__fast")
    bldg_one.classList.add("animate__slow")
    bldg_two.classList.add("animate__slower")
    bldg_three.classList.add("animate__fast")
  })
  return (
    <Layout>
      <Header />
      <Seo title="Home" />
    </Layout>
  )
}
export default IndexPage
