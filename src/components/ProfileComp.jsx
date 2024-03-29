import React from 'react'

const ProfileComp = () => {
  return (
    <section className='flex justify-center'>
      <article>
        <div className='relative'>
          {/* Post */}
          <div className='absolute w-full h-full bg-black bg-opacity-50'></div>
          <img
            className='w-[40rem] h-80'
            src="https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdGVyfGVufDB8fDB8fHww" alt="" />

          {/* Profile */}
          <div className='flex justify-between'>
            <img
              className='absolute -bottom-10 left-5 w-40 h-40 rounded-[100%] border-8 border-white'
              src="https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.webp?b=1&s=170667a&w=0&k=20&c=7ULkaoeTcq3NKaiw0anIFqG0JKXEvbaMHwUbT4BGl4Y=" alt="" />

            
            <div className='text-white absolute bottom-5 right-10'>
              <p className='text-2xl font-bold'>
                Idowu Daniel
              </p>
              <p className='text-sm'>Software Developer</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ProfileComp
