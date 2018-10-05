import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import githubLogo from '../images/github.svg'

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost
  console.log(post);

  const viewGitHub = post.githubUrl ? (
    <a href={post.githubUrl} className='flex items-center no-underline text-black xl:sticky xl:pin-t'>
      <img src={githubLogo} alt='' style={{ opacity: 0.6 }} className='w-12 h-12 order-1 ml-4 lg:order-0 lg:ml-0 lg:mr-4' />
      <span className='text-xl'>View Source on GitHub</span>
    </a>
  ) : ''

  return (
    <Layout
      title={post.title}
      description={post.description}
    >
      <main className='container mx-auto p-6 pt-32'>
        <h1 className='leading-tight text-black md:text-4xl'>{post.title}</h1>
        <h2 className='mt-2 mb-4 text-grey leading-none'>{post.createdAt}</h2>
        <div className='xl:flex xl:justify-between'>
          <article className='blog-post' dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }}></article>
          <aside className='text-center lg:text-left mt-12 xl:mt-0'>
            <div className='inline-block xl:sticky xl:p-t-32'>
              { viewGitHub }
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      description
      createdAt(formatString: "MMMM DD, YYYY")
      githubUrl
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default BlogPost
