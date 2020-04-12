import { NextPage } from 'next'

import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigation'
import { getBlogBy } from '../../service/blogs'

interface BlogItemType {
  id: String,
  createdAt: String,
  updatedAt: String,
  title: String,
  date: String,
  content: String
}

const BlogsItemPage: NextPage<BlogItemType> = (props) => {
  const { title, date, content } = props;
  return (
    <>
      <Head title="Blogs page" description="" url="" ogImage="" />
      <Navigation />
      <section>
        <h2>{ title }</h2>
        <p>{ date }</p>
        <div>{ content }</div>
      </section>
    </>
  )
}

BlogsItemPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  const { data } = await getBlogBy(id);
  return { ...data }
}

export default BlogsItemPage;
