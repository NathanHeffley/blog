const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulLesson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            slug: edge.node.slug,
          },
        })
      })
      result.data.allContentfulLesson.edges.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: path.resolve('./src/templates/lesson-page.js'),
          context: {
            slug: edge.node.slug,
          },
        })
      })
      resolve()
    })
  })
}
