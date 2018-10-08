import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Excerpt from '../components/excerpt'

const IndexPage = ({ data }) => (
  <Layout title="Nathan Heffley | Specializing in Progressive Web Apps">
    <main className='container mx-auto p-6 pt-32'>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
          <Excerpt key={node.id}
            slug={node.slug}
            title={node.title}
            excerpt={node.content.childMarkdownRemark.excerpt}
          />
      ))}
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 500)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
