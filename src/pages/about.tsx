import * as React from 'react'
import { Paragraph, Container } from 'theme-ui'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <Container p={2}>
        <h1>About</h1>
        <Paragraph>where we talk about! aboot? aboud!</Paragraph>
      </Container>
    </Layout>
  )
}

export default AboutPage
