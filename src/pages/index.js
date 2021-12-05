import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This site has been created to jot down all the cool stuff which can be done using UiPath or tech I am interested in or currently learning!</p>
      <StaticImage
        alt="Developer, a person who codes"
        src="C:\Users\Sachin\Gatsby\SachinHatikankanGatsbyPortfolio\src\images\developerImage.jpg"
      />
    </Layout>
  )
}

export default IndexPage