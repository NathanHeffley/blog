import React from 'react'
import { Link } from 'gatsby'

import lessonIcon from '../images/lesson.svg'

const Title = ({ slug, title, lesson }) => (
  <div>
    {lesson ? (
      <div className="inline-block mb-2">
        <Link
          to={lesson.slug}
          className="flex items-center font-light text-xl no-underline text-gray-700"
        >
          <img
            src={lessonIcon}
            alt=""
            style={{ opacity: 0.5 }}
            className="h-6 mr-2"
          />
          <span className="leading-none">{lesson.title}</span>
        </Link>
      </div>
    ) : (
      ''
    )}
    <h2 className="mb-2 leading-tight text-2xl md:text-4xl">
      {slug ? (
        <Link to={slug} className="no-underline text-black">
          {title}
        </Link>
      ) : (
        title
      )}
    </h2>
  </div>
)

export default Title
