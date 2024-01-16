import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const RightBar = () => {

  const component_style = 'md:fixed left-[80%] z-20 flex flex-col items-start pl-5 py-5 md:py-20 gap-5'
  const links_style = 'flex gap-2 items-center text-md cursor-pointer hover:underline'

  return (
    <div className='flex flex-col gap-10 w-0 md:w-1/5 pt-5 overflow-auto border-2 h-fit z-10'>

      {/* Topics */}
      <section className={component_style}>
        <p className='underline text-black text-opacity-50'>Communities</p>
        <article className={links_style}>
          <BsArrowUpRightCircle />
          <div>
            <p>Madridstas</p>
            <small className='text-xs'>112,000 followers</small>
          </div>
        </article>

        <article className={links_style}>
          <BsArrowUpRightCircle />
          <div>
            <p>Tech Newbies</p>
            <small className='text-xs'>12,080 followers</small>
          </div>         
        </article>

        <article className={links_style}>
          <BsArrowUpRightCircle />
          <div>
            <p>The Business Gurus</p>
            <small className='text-xs'>51,200 followers</small>
          </div>          
        </article>

        <article className={links_style}>
          <BsArrowUpRightCircle />
          <div>
            <p>Hangout</p>
            <small className='text-xs'>500 followers</small>
          </div>         
        </article>

      </section>

      <hr />


    </div>
  )
}

export default RightBar
