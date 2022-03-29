import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { pdfjs } from 'react-pdf';
import ResumeDisplay from "../components/resumedisplay"

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const ResumePage = () => (
    <Layout>
        <Seo title="Resume" />  
        <ResumeComponent></ResumeComponent>
    </Layout>
)

const ResumeComponent = () => {
    return (
        <div style={{position: `absolute`, margin: `auto auto`, top: `0`, left: `50%`}}>
            <ResumeDisplay />
        </div>
    )
}

export default ResumePage