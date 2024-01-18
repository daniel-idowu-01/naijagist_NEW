import React from 'react'
import MainUser from '../components/MainUser'
import OtherUser from '../components/OtherUser'

const Chat = () => {
  return (
    <section className='relative md:left-[5%] w-full h-screen md:w-[95%] bg-background px-5 md:px-10 py-5 pb-40'>

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
      </article>
      
    </section>
  )
}

export default Chat
