import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResumeDisplay from "../components/resumedisplay"

const ResumePage = () => (
    <Layout>
        <Seo title="Resume" />  
        <ResumeDisplay></ResumeDisplay>
    </Layout>
)



export default ResumePage