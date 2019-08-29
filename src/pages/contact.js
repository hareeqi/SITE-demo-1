import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import Menu from '../templates/Menu'
const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Menu data={data.allContentfulPage.nodes} />

      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPage {
      nodes {
        id
        title
        slug
      }
    }
  }
`

export default Contact
