import React from 'react'
import { Link } from 'gatsby'

import LessonIcon from '../images/lesson.svg'

const Title = ({ slug, title, lesson }) => (
  <div>
    {lesson ? (
      <div className="inline-block mb-2">
        <Link
          to={lesson.slug}
          className="flex items-center font-light text-xl no-underline text-gray-700 dark:text-white"
        >
          <LessonIcon className="h-6 mr-2" />
          <span className="leading-none">{lesson.title}</span>
        </Link>
      </div>
    ) : (
      ''
    )}
    <h2 className="mb-2 leading-tight text-2xl md:text-4xl text-black dark:text-white">
      {slug ? (
        <Link to={slug} className="no-underline">
          {title}
        </Link>
      ) : (
        title
      )}
    </h2>
  </div>
)

export default Title
