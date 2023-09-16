import React from 'react'
import { BiLike } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { TbShare3 } from 'react-icons/tb'



const BlogComponent = ({name, profile_image, post_text, post_image}) => {

  const icons_style = 'border cursor-pointer p-3 px-5'

  return (
    <div className='relative border p-3'>
      {/* Post Header */}
      <article className='flex gap-2 items-center'>
        <img 
            src={ profile_image } 
            className='rounded-full h-10 w-10 object-cover' alt="" 
        />
        <p>{ name }</p>
      </article>

      {/* Post Content */}
      <p className='py-3 block border'>{ post_text }</p>
      
      {/* Post Image */}
      <img 
       src={ post_image }
       className='w-full h-96 object-cover' alt="" 
       />

      {/* Section for post likes, comments and share icons */}
      <section className='flex justify-end items-center p-3 border'>
        <p className={icons_style}>
           <BiLike className='inline' /> Like
        </p>
        <p className={icons_style}>
           <FaRegComment className='inline' /> Comment
        </p>
        <p className={icons_style}>
           <TbShare3 className='inline' /> Share
        </p>
      </section>
    </div>
  )
}

export default BlogComponent
