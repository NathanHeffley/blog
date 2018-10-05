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
            date={node.createdAt}
            excerpt={node.content.childMarkdownRemark.excerpt}
          />
      ))}
    </main>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
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
