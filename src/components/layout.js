/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import "../style/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
        {/* <link href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" rel="stylesheet"></link> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/brands.min.js"></script> */}
      </Helmet>
        <main className="main section is-medium">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
