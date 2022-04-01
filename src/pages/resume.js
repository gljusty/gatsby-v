import * as React from "react"
import ContactMeComponent from "../components/contactme"
import Layout from "../components/layout"
import ResumeDisplay from "../components/resumedisplay"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <ResumeDisplay />
    <ContactMeComponent />
  </Layout>
)

export default ResumePage
