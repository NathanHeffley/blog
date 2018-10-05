import React from 'react'
import { Link } from 'gatsby'

import twitterLogo from '../images/twitter.svg'
import githubLogo from '../images/github.svg'

const Header = ({ siteTitle }) => (
  <header className='shadow fixed w-full bg-white z-50'>
    <nav className='container mx-auto p-6 flex items-center justify-between'>
      <h1 className='text-2xl'>
        <Link to='/' className='font-light no-underline text-inherit'>
          {siteTitle}
        </Link>
      </h1>
      <div className='flex items-center'>
        <a href='https://twitter.com/NathanHeffley' className='w-8 h-8 ml-4 no-underline'>
          <img src={twitterLogo} alt='Twitter' className='h-full' />
        </a>
        <a href='https://github.com/NathanHeffley' className='w-8 h-8 ml-4 no-underline'>
          <img src={githubLogo} alt='GitHub' className='h-full' />
        </a>
      </div>
    </nav>
  </header>
)

export default Header
