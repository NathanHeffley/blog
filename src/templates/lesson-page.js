import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'

const LessonPage = ({ data }) => {
  data.contentfulLesson.blog_post.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return (
    <Layout title="Nathan Heffley | Specializing in Progressive Web Apps">
      <main className='container mx-auto p-6 pt-32'>
        {data.contentfulLesson.blog_post.map((node) => (
          <div key={ node.id } className='mb-12'>
            <Title
              slug={ node.slug }
              title={ node.title }
            ></Title>
            <p className='leading-normal text-grey-darker text-lg font-serif'>{ node.content.childMarkdownRemark.excerpt }</p>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query lessonPageQuery($slug: String!) {
    contentfulLesson(slug: {eq: $slug}) {
      title
      slug
      blog_post {
        id
        title
        slug
        createdAt
        content {
          childMarkdownRemark {
            excerpt(pruneLength: 500)
          }
        }
      }
    }
  }
`

export default LessonPage
