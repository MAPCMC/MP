/** @jsxImportSource theme-ui */

import * as React from "react"
import "../assets/fontawesome/css/all.css"
import Layout from "../components/Layout"
import { Container } from "theme-ui"

const IndexPage = () => {
  return (
    <Layout pageTitle='Maarten Peene'>
      <Container p={2}>
        <h1>Maarten Peene</h1>
        <h5>gezellige vent hoor, jeetje</h5>
      </Container>
    </Layout>
  )
}

export default IndexPage
