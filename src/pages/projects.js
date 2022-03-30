import * as React from "react"
import ProjectDisplay from "../components/projectdisplay"
import Layout from "../components/layout"
import Seo from "../components/seo"



const ProjectPage = () => (
  <Layout>
    <Seo title="Projects" />
    <ProjectDisplay></ProjectDisplay>
  </Layout>
)

export default ProjectPage
