import * as React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    const houses = Array.from(document.querySelectorAll(".house"))
    for (const house in houses) {
      console.log(house)
      houses[house].classList.add(
        "animate__animated",
        `animation_delay-${house}s`,
        "animate__fadeInDownBig",
        "animate__slower"
      )
    }
  })
  return (
    <Layout>
      <Header />
      <Seo title="Home" />
    </Layout>
  )
}
export default IndexPage
