import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'

import lessonIcon from '../images/lesson-heavy.svg'

const LessonPage = ({ data }) => {
  data.contentfulLesson.blog_post.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return (
    <Layout
      title={data.contentfulLesson.title}
      description={data.contentfulLesson.description.childMarkdownRemark.raw}
    >
      <main className='container mx-auto p-6 pt-32'>
        <h1 className='flex mb-2 no-underline text-black text-3xl md:text-5xl'>
          <img src={lessonIcon} alt='' className='h-6 mr-2 mt-1 md:h-10 md:mr-4 md:mt-2' />
          {data.contentfulLesson.title}
        </h1>
        <span
          className='block mb-12 leading-normal text-black text-2xl'
          dangerouslySetInnerHTML={{ __html: data.contentfulLesson.description.childMarkdownRemark.html }}
        ></span>

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
      description {
        childMarkdownRemark {
          html
        }
      }
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
