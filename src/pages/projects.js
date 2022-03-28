import * as React from "react"
import ProjectDisplayer from "../components/projectdisplayer"
import Layout from "../components/layout"
import Seo from "../components/seo"



const ProjectPage = () => (
  <Layout>
    <Seo title="Projects" />
    <ProjectDisplayer></ProjectDisplayer>
  </Layout>
)

export default ProjectPage
