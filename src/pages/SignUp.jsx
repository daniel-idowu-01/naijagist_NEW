import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const input_style = 'block border rounded-full px-4 py-2 w-full bg-transparent outline-none'
    const signup_container = 'bg-white rounded-md md:w-[30%] flex justify-center shadow-md border p-7 transition-all'

  return (
      <section className='flex justify-center relative top-20 md:top-40'>
        <div
        className={signup_container} id='sign-up'
        >
          <section className='flex flex-col gap-5'>
              <p className='text-xl font-semibold'>Sign Up</p>

              {/* Sign Up Form */}    
              <form action="#" className='flex flex-col gap-3'>
              <input className={input_style} type="text" name="username" id="username" placeholder='Username' />
              <input className={input_style} type="text" name="username" id="email" placeholder='Email' />
              <input className={input_style} type="password" name="password" id="password" placeholder='Password' />
              <input className={input_style} type="password" name="password" id="confirm_password" placeholder='Confirm Password' />
              <button
              className='bg-bice-blue rounded-full px-4 py-2 text-white w-full'>
                  Sign Up
              </button>
              </form>
              <p>
              Been on NaijaGist?<span className='text-bice-blue hover:underline hover:cursor-pointer'> <Link to='/login'>Log In</Link></span> 
            </p>
            
            <p className='w-full text-xs'>
              By continuing, you are setting up a NaijaGist account and agree to out <span className='text-bice-blue'>User Arrangement</span> and <span className='text-bice-blue'>Privacy Policy</span>
              </p>
          </section>
          
        </div>
      </section>
    )
  }

export default SignUp
