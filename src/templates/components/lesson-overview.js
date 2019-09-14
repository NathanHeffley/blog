import React from 'react'
import { Link } from 'gatsby'

const LessonOverview = ({ currentId, lesson }) => {
  let lessonOverview = ''

  if (lesson) {
    let articles = []

    lesson.blog_post.sort((a, b) => a.createdAt.localeCompare(b.createdAt))

    for (let i = 0; i < lesson.blog_post.length; i++) {
      let article = lesson.blog_post[i]
      let isCurrentArticle = article.id === currentId
      let number = i > 9 ? i + 1 : '0' + (i + 1)

      let numberClasses = isCurrentArticle
        ? 'text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900'
        : 'text-gray-600'

      let linkContent = (
        <>
          <span
            className={
              'w-10 h-10 text-xl rounded-full flex items-center justify-center ' +
              numberClasses
            }
          >
            {number}
          </span>
          <span className="ml-2">{article.title}</span>
        </>
      )

      let link = isCurrentArticle ? (
        // eslint-disable-next-line
        <a
          href="#"
          className="flex items-baseline inline-block no-underline text-inherit relative"
        >
          {linkContent}
        </a>
      ) : (
        <Link
          to={article.slug}
          className="flex items-baseline inline-block no-underline text-inherit relative"
        >
          {linkContent}
        </Link>
      )

      let liClasses = isCurrentArticle
        ? 'text-teal-500 dark:text-teal-400'
        : 'text-gray-600 dark:text-gray-500'

      articles.push(
        <li className={'mb-4 ' + liClasses} key={article.id}>
          {link}
        </li>
      )
    }

    lessonOverview = (
      <div className="text-left">
        <h2 className="font-light text-4xl mb-4">
          <Link
            to={lesson.slug}
            className="no-underline text-inherit dark:text-white"
          >
            {lesson.title}
          </Link>
        </h2>
        <ul className="font-light text-2xl list-reset">{articles}</ul>
      </div>
    )
  }

  return lessonOverview
}

export default LessonOverview
