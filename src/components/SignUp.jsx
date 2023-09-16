import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [opacity, setOpacity] = useState(1);
    const input_style = 'block border rounded-full px-4 py-2 w-11/12 bg-transparent outline-none'
    const signup_container = 'absolute bg-white rounded-md md:w-2/5 md:translate-x-2/3 translate-y-1/4 md:left-20 flex justify-center shadow-md border p-7 transition-all'

    const hideSignUp = () => {
      let signup = document.getElementById('sign-up');
      signup.style.opacity = '0'
      setOpacity(0);
    }

    return (
      <div
       style={{pointerEvents: opacity === 0 ? 'none' : ''}}
       className={signup_container} id='sign-up'
       >
        {/* Close Icon */}
        <span
         onClick={hideSignUp}
         class="material-symbols-outlined cursor-pointer absolute right-64">
          close
        </span>
        <section className='flex flex-col gap-3 mt-7'>
            <p className='text-xl font-semibold'>Sign Up</p>
            <p className='w-full'>
            By continuing, you are setting up a NaijaGist account and agree to out <span className='text-bice-blue'>User Arrangement</span> and <span className='text-bice-blue'>Privacy Policy</span>
            </p>

            {/* Sign Up Form */}    
            <form action="#" className='flex flex-col gap-3'>
            <input className={input_style} type="text" name="username" id="username" placeholder='Username' />
            <input className={input_style} type="text" name="username" id="email" placeholder='Email' />
            <input className={input_style} type="password" name="password" id="password" placeholder='Password' />
            <input className={input_style} type="password" name="password" id="confirm_password" placeholder='Confirm Password' />
            <button
            className='bg-bice-blue rounded-full px-4 py-2 text-white w-11/12'>
                Sign Up
            </button>
            </form>
            <p>
            Been on NaijaGist?<span className='text-bice-blue hover:underline hover:cursor-pointer'> <Link to='/login'>Log In</Link></span> 
            </p>
        </section>
        
      </div>
    )
  }

export default SignUp
