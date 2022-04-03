import * as React from "react"
import Layout from "../components/layout"
import PancakeComponent from "../components/pancake"
import ResumeDisplay from "../components/resumedisplay"
import Seo from "../components/seo"

const ResumePage = () => {
  return (
    <Layout>
      <Seo title="Resume" />
      <ResumeDisplay />
      <PancakeComponent />
    </Layout>
  )
}

export default ResumePage
