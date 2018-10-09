import React from 'react'

import githubLogo from '../../images/github.svg'

const GitHubLink = ({ url }) => (
  <a href={url} className='flex items-center no-underline text-black xl:sticky xl:p-t-32'>
    <img src={githubLogo} alt='' style={{ opacity: 0.6 }} className='w-12 h-12 mr-4' />
    <span className='text-xl'>View Source on GitHub</span>
  </a>
)

export default GitHubLink
