import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Voice = ({ data }) => (
  <Layout>
    <Img fluid={data.voice.childImageSharp.fluid} />
    <h1>Voice Overs</h1>
    <section>
      <article>
        <h2>Current Voice of LoveSport Radio</h2>
        <p>
          You may recognise Cal's voice as the 'voice of the station' at
          LoveSport Radio. The London sports station has several highly
          acclaimed sports stars hosting shows including Olimpic Sprinter Iwan
          Thomas MBE and Former England and Lions Rugby Player Brain Moore!
        </p>
      </article>
      <article>
        <h2>Get Your Voice Right</h2>
        <p>
          Cal has provided voice overs for everything from YouTube Videos to
          Hair Loss Products and even West Ham United. He is adaptable and
          passionate about you receiving your perfect company voice.
        </p>
      </article>
      <article>
        <h2>Ask for a Demo</h2>
        <p>
          Cal offers a free demo of what you would like recording at no cost!
          Simply send him a message with all the details via the button below!
        </p>
        <button>
          <Link to="/contact">Request a demo</Link>
        </button>
      </article>
    </section>
    <div />
  </Layout>
)

export const query = graphql`
  query {
    voice: file(relativePath: { regex: "/voice/" }) {
      ...fluidImage
    }
  }
`

export default Voice