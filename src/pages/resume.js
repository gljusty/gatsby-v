import * as React from "react"
import Layout from "../components/layout"
import ResumeDisplay from "../components/resumedisplay"
import Seo from "../components/seo"

const ResumePage = () => (
    <Layout>
        <Seo title="Resume" />
        <ResumeDisplay />
    </Layout>
)



export default ResumePage