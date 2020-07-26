import React from 'react'
import Layout from '../components/Layout'
// import Container from '../components/Container'
// import PageTitle from '../components/PageTitle'
// import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import PortfolioShowcase from '../containers/Portfolio/PortfolioShowcase'
import Skill from '../containers/Portfolio/Skill'
import Banner from '../containers/Portfolio/Banner'

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Creative Coder" description="portfolio project for life" />
      <Banner />
      <PortfolioShowcase />
      <Skill />
    </Layout>
  )
}

export default Index
