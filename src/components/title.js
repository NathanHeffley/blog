import React from 'react'
import { Link } from 'gatsby'

import streamIcon from '../images/stream-light.svg'

const Title = ({ slug, title, lesson }) => (
  <div>
    { lesson ? (
      <span className='flex items-center mb-2 text-grey-dark font-light text-xl'>
        <img src={streamIcon} alt='' style={{ opacity: 0.5 }} className='h-6 mr-2' />
        { lesson.title }
      </span>
    ) : '' }
    <h2 className='mb-2 leading-tight md:text-4xl'>
      { slug ? (
        <Link to={ slug } className='no-underline text-black'>{title}</Link>
      ) : title }
    </h2>
  </div>
)

export default Title