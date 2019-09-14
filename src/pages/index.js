import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'

const IndexPage = ({ data }) => (
  <Layout title="Nathan Heffley | Specializing in Progressive Web Apps">
    <main className="container mx-auto p-6 pt-32">
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.id} className="mb-12">
          <Title slug={node.slug} title={node.title} lesson={node.lesson} />
          <p className="leading-normal text-gray-700 text-lg font-serif">
            {node.content.childMarkdownRemark.excerpt}
          </p>
        </div>
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
          lesson {
            title
            slug
          }
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
