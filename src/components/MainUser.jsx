import React from 'react'

const MainUser = () => {

  return (
    <article
      className='mt-5 md:mt-0 flex items-start gap-2 p-4 w-full md:w-1/2 bg-[#60B7FF] text-white rounded-2xl rounded-br-none justify-between'
    >
      <div>
        <p className='text-[#93ED93] inline'>You: </p>
        <span>
          Hello
        </span>
      </div>
      <img src={LogoWhite} alt="" className='hidden md:block bg-[#3978D4] p-2 rounded-[100%]' />
    </article>
  )
}

export default MainUser
