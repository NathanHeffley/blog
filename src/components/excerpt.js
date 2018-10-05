import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Excerpt = ({ slug, title, date, excerpt }) => (
  <div className='mb-12'>
    <h1 className='leading-tight md:text-4xl'>
      <Link to={slug} className='no-underline text-black'>{title}</Link>
    </h1>
    <h2 className='mt-2 mb-4 text-grey leading-none'>
      {date}
    </h2>
    <p className='leading-normal text-grey-darker text-lg font-serif'>{excerpt}</p>
  </div>
)

Excerpt.propTypes = {
  slug: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  excerpt: PropTypes.node.isRequired,
}

export default Excerpt
