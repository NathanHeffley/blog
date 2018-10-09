import React from 'react'

const LessonOverview = ({ currentId, lesson }) => {
  let lessonOverview = ''

  if (lesson) {
    let articles = []
    for (let i = 0; i < lesson.blog_post.length; i++) {
      let article = lesson.blog_post[i]
      let isCurrentArticle = article.id === currentId
      let number = i > 9 ? i + 1 : '0' + (i + 1)

      let href = isCurrentArticle ? '' : '/' + article.slug
      let liClasses = isCurrentArticle ? 'text-teal' : 'text-grey-darker'
      let spanClasses = isCurrentArticle ? 'text-teal-dark bg-teal-lightest' : 'text-grey-dark'

      articles.push(
        <li className={ 'mb-4 ' + liClasses } key={ article.id }>
          <a href={ href } className='no-underline text-inherit relative'>
            <span className={ 'text-xl p-2 mr-2 rounded-full absolute pin-number ' + spanClasses }>{ number }</span>
            <span className='block pl-10'>{ article.title }</span>
          </a>
        </li>
      )
    }

    lessonOverview = (
      <div className='text-left'>
        <h2 className='font-light text-4xl mb-4'>{ lesson.title }</h2>
        <ul className='font-light text-2xl list-reset'>
          {articles}
        </ul>
      </div>
    )
  }

  return lessonOverview
}

export default LessonOverview
