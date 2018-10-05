import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.css'

const Layout = ({ title, description, children }) => (
  <>
    <Helmet
      title={ title }
      meta={[
        { name: 'description', content: description },
      ]}
    >
      <html lang="en" />
      <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst"></script>
    </Helmet>
    <Header siteTitle="Nathan Heffley" />
    {children}
  </>
)

Layout.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  description: 'Building websites that load fast, work offline, and achieve business goals are crucial for companies developing web-based products.',
}

export default Layout
