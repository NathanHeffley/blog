import React from 'react'
import { Link } from 'gatsby'

import TwitterLogo from '../images/twitter.svg'
import GithubLogo from '../images/github.svg'

const Header = ({ siteTitle }) => (
  <header className="shadow fixed w-full bg-white dark:bg-gray-900 z-50">
    <nav className="container mx-auto p-6 flex items-center justify-between">
      <h1 className="text-2xl">
        <Link
          to="/"
          className="font-light no-underline text-inherit dark:text-white"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="flex items-center">
        <a
          href="https://twitter.com/NathanHeffley"
          className="w-8 h-8 ml-4 no-underline"
        >
          <TwitterLogo className="h-full dark:text-gray-200" />
        </a>
        <a
          href="https://github.com/NathanHeffley"
          className="w-8 h-8 ml-4 no-underline"
        >
          <GithubLogo className="h-full dark:text-gray-200" />
        </a>
      </div>
    </nav>
  </header>
)

export default Header
