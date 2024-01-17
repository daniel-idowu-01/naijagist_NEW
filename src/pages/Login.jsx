import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const input_style = 'block border rounded-md px-4 py-2 w-full bg-transparent outline-none'
  const login_container = 'bg-white rounded-md md:w-[30%] flex justify-center shadow-md border p-7 transition-all'

  return (
    <section className='flex justify-center relative top-20 md:top-40 p-5'>
      <div
      className={login_container}>
        <section className='flex flex-col gap-5'>
          <p className='text-xl font-semibold'>Log In</p>
        
          {/* Log In Form */}
          <form action="#" className='flex flex-col gap-3'>
            <input
              className={input_style}
              type="text" name="username"
              id="username" placeholder='Username'
            />
            <input
              className={input_style}
              type="password" name="password"
              id="password" placeholder='Password'
            />
            <button
              className='bg-bice-blue rounded-md px-4 py-2 text-white w-full'
            >
                Log In
            </button>
          </form>

          <p>
            New to NaijaGist? 
            <span className='text-bice-blue hover:underline hover:cursor-pointer ml-1'>
              <Link to='/sign-up'>Sign Up</Link>
            </span> 
          </p>

          <p className='w-full text-xs'>
            By continuing, you are setting up a NaijaGist account and agree to out <span className='text-bice-blue'>User Arrangement</span> and <span className='text-bice-blue'>Privacy Policy</span>
          </p>

        </section>
        
      </div>
    </section>
  )
}

export default Login
