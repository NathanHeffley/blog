import React from 'react'
import { Link } from 'gatsby'

import lessonIcon from '../images/lesson.svg'

const Title = ({ slug, title, lesson }) => (
  <div>
    { lesson ? (
      <Link to={lesson.slug} className='flex items-center mb-2 font-light text-xl no-underline text-grey-dark'>
        <img src={lessonIcon} alt='' style={{ opacity: 0.5 }} className='h-6 mr-2' />
        { lesson.title }
      </Link>
    ) : '' }
    <h2 className='mb-2 leading-tight md:text-4xl'>
      { slug ? (
        <Link to={ slug } className='no-underline text-black'>{title}</Link>
      ) : title }
    </h2>
  </div>
)

export default Title
