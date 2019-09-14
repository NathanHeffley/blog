import React from 'react'

import GithubLogo from '../../images/github.svg'

const GitHubLink = ({ url }) => (
  <div className="inline-block xl:sticky xl:p-t-32">
    <a
      href={url}
      className="flex items-center no-underline text-gray-700 dark:text-gray-300"
    >
      <GithubLogo className="w-12 h-12 mr-4 fill-current" />
      <span className="text-xl">View Source on GitHub</span>
    </a>
  </div>
)

export default GitHubLink
