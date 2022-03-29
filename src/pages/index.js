import * as React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    const houses = Array.from(document.querySelectorAll('.house'))
    for ( const house in houses ) {
      houses[house].classList.add('animate__animated', 'animate__fadeInDownBig', 'animation__delay-2s')
      if (parseInt(house) % 2 !== 1) {
        houses[house].classList.add('animate__slower')
      } else if (parseInt(house) % 3 !== 0) {
        houses[house].classList.add('animate__faster')
      }
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
