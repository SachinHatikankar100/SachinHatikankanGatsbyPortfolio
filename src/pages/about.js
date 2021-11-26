// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I am a RPA Developer and a Full Stack enthusiast</p>
      <p>I have developed and automated 5 UiPath processes and 2 WinAutomation processes over my 6 years of IT expereince</p>
      <p>I have started my open-source in the year 2021. Aspire to make valueable contributions</p>
      <p>I am learning Typescript, Nextjs, React, Prisma</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage