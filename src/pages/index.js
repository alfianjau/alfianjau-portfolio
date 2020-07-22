import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
// import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Alfianjau Portfolio"
        description="portfolio project for life"
      />
      <Container>
        <PageTitle>Landing page</PageTitle>
      </Container>
    </Layout>
  )
}

export default Index
