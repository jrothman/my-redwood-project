import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const MyPagePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ArticlesCell />
    </>
  )
}

export default MyPagePage
