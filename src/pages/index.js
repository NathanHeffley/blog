import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout title="Nathan Heffley | Specializing in Progressive Web Apps">
    <main className='container mx-auto p-6 pt-32'>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id} className='excerpt'>
            <h2>
              <Link to={node.slug} className='no-underline text-black'>{node.title}</Link>
            </h2>
            <h3 className='text-grey'>
              {node.createdAt}
            </h3>
            <p>{node.content.childMarkdownRemark.excerpt}</p>
          </div>
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
