import React from 'react'
import BlogComponent from './BlogComponent'
import data from '../data/data'

const Content = () => {
  return (
    <div className='flxed w-full md:w-3/5 overflow-auto'>
      {data.map((post) => (
        <BlogComponent
         key={post.id}
         name={post.name}
         profile_image={post.profile_image}
         post_text={post.post_text} 
         post_image={post.post_image}
         />
      ))}
    </div>
  )
}

export default Content
