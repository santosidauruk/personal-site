import React from "react"
import Typed from "react-typed"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero"></div>
    <div className="container">
      <h1 className="title">
        Santo Sidauruk
      </h1>
      <h3 className="subtitle">
      {/* <Typed
        strings={[
            'A software engineer',
            'A ',
            'Search for brands']}
        typeSpeed={50}
        backSpeed={50}
        backDelay={700}
        loop /> */}
        A software developer who loves to build beautiful platform
      </h3>
      <a className="social-media-links" target="_blank" rel="noopener noreferrer" href="https://www.github.com/santosidauruk">
        <i className="fab fa-github"></i>
      </a>
      <a className="social-media-links" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/santosidauruk">
        <i className="fab fa-instagram"></i>
      </a>
      <a className="social-media-links" href="https://www.linkedin.com/in/santo-sidauruk/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </Layout>
)

export default IndexPage
