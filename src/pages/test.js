import * as React from "react"
import Layout from "../components/layout"

import Seo from "../components/seo"
import { Link } from "gatsby"

const test = () => (
    <Layout>
        <Seo title="test" />
        <Link to="/">Home</Link>
    </Layout>
)

export default test