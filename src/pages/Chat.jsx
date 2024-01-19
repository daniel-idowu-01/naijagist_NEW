import React from 'react'
import MainUser from '../components/MainUser'
import OtherUser from '../components/OtherUser'
import Input from '../components/Input'
import { FaArrowLeft } from 'react-icons/fa'

const Chat = () => {
  return (
    <section>
      <nav className='relative flex items-center gap-1 px-5 md:px-10 py-5 mx-auto md:w-[95%] border'>
        <FaArrowLeft />
        <div>
          <img
            className='w-10 h-10 rounded-full object-cover ml-1'
            src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww" alt=""
          />
        </div>
        <div>
          <p className='font-bold'>Madridistas</p>
          <p className='text-xs'>345 members</p>
        </div>
      </nav>

      <body
        className='relative md:left-[5%] h-screen md:w-[95%] bg-background px-5 md:px-10 py-5 pb-40'
      >
        <article className='mt-10'>
          <section>
            <div className='flex justify-between'>
              <div></div>
              <MainUser />
            </div>
            
            <div className='flex justify-between'>
              <OtherUser />
              <div></div>
            </div>

          </section>

          <article className='w-1/2 mx-auto'>
            <Input />
          </article>
        </article>
      </body>

      
      
    </section>
  )
}

export default Chat
