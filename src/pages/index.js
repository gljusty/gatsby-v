import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import mycomponent from "../components/mycomponent"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <mycomponent />
  </Layout>
)

export default IndexPage
