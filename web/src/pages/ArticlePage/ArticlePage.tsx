import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ArticlePage = () => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.tsx</code>
      </p>
      <p>
        My default route is named <code>article</code>, link to me with `
        <Link to={routes.article()}>Article</Link>`
      </p>
    </>
  )
}

export default ArticlePage
