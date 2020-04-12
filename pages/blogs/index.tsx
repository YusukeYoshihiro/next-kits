import { NextPage } from 'next';
import Link from 'next/link'
import React from 'react';

import { getBlogs } from '../../service/blogs';
import Head from '../../components/templates/head';
import Navigation from '../../components/templates/navigation'

interface BlogItemType {
  item: {
    id: String,
    createdAt: String,
    updatedAt: String,
    title: String,
    date: String,
    content: String
  }
}

const BlogItemStyle = {
  padding: 10,
  background: '#fcfcfe',
  marginTop: 10,
  boxShadow: '2px, 2px, 2px #888'
}

const BlogItem: React.FC<BlogItemType> = props => {
  const { id, title , date } = props.item;

  return (
    <div style={ BlogItemStyle }>
      <Link href="/blogs/[id]" as={`/blogs/${id}`}>
        <div>
          <span>{ date }</span>
          <span>{ title }</span>
        </div>
      </Link>
    </div>
  )
}

const Blogs: NextPage<{}> = (props) => {
  const { contents: blogList } = props;

  return (
    <div className="blog-container">
      <Head title="Blogs page" description="" url="" ogImage="" />
      <Navigation />
      {
        blogList.map( item => <BlogItem item={ item } key={ item.id } />)
      }
    </div>
  )
}

Blogs.getInitialProps = async () => {
  const { data } = await getBlogs();
  return { contents: data.contents };
}

export default Blogs;
