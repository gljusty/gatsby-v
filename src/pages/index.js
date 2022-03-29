import * as React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    const houses = Array.from(document.querySelectorAll('.house'))
    for ( const house in houses ) {
      houses[house].classList.add('animate__animated', 'animate__fadeInDownBig')
      if (parseInt(house) % 2 !== 0) {
        houses[house].classList.add('animate__slower')
        if (parseInt(house) > 3) {
          houses[house].classList.add('animation__delay-3s')
        }
      } else if (parseInt(house) % 3 !== 0) {
        houses[house].classList.add('animate__faster', 'animation__delay-4s')
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
