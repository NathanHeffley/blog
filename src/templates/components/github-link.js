import React from 'react'

import githubLogo from '../../images/github.svg'

const GitHubLink = ({ url }) => (
  <div className='inline-block xl:sticky xl:p-t-32'>
    <a href={url} className='flex items-center no-underline text-black'>
      <img src={githubLogo} alt='' style={{ opacity: 0.6 }} className='w-12 h-12 mr-4' />
      <span className='text-xl'>View Source on GitHub</span>
    </a>
  </div>
)

export default GitHubLink
