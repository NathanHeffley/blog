import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/title'
import GitHubLink from './components/github-link'
import LessonOverview from './components/lesson-overview'

import './blog-post.css'

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost

  return (
    <Layout
      title={post.title}
      description={post.description}
    >
      <main className='container mx-auto p-6 pt-32'>
        <Title
          title={post.title}
          lesson={post.lesson}
        ></Title>
        <div className='xl:flex xl:justify-between'>
          <article className='blog-post' dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }}></article>
          <aside className='text-center lg:text-left mt-12 xl:mt-0 xl:ml-12 xl:flex xl:flex-col xl:justify-between'>
            <div className={ 'flex-grow' + (post.githubUrl && post.lesson ? ' mb-12' : '') }>
              { post.githubUrl ? (<GitHubLink url={ post.githubUrl } />) : '' }
            </div>
            { (<LessonOverview currentId={ post.id } lesson={ post.lesson } />) }
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      id
      title
      description
      githubUrl
      lesson {
        title
        blog_post {
          id
          title
          slug
          createdAt
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default BlogPost
