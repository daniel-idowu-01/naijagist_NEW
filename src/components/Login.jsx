import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginContext from '../data/context/LoginContext'

const Login = () => {

  const { login } = useContext(LoginContext)

  const input_style = 'block border rounded-full px-4 py-2 w-11/12 bg-transparent outline-none'
  const login_container = 'absolute bg-white rounded-md md:w-2/5 md:translate-x-2/3 translate-y-1/4 md:translate-y-1/3 md:left-20 flex justify-center shadow-md border p-7 transition-all'

  return (
    <div
     className={`${login ? login_container : ''}`}>
      {login && <section className='flex flex-col gap-3'>
        <p className='text-xl font-semibold'>Log In</p>
        <p className='w-full'>
          By continuing, you are setting up a NaijaGist account and agree to out <span className='text-bice-blue'>User Arrangement</span> and <span className='text-bice-blue'>Privacy Policy</span>
        </p>

        {/* Log In Form */}
        <form action="#" className='flex flex-col gap-3'>
          <input className={input_style} type="text" name="username" id="username" placeholder='Username' />
          <input className={input_style} type="password" name="password" id="password" placeholder='Password' />
          <button
          className='bg-bice-blue rounded-full px-4 py-2 text-white w-11/12'>
            Log In
          </button>
        </form>
        <p>
          New to NaijaGist?<span className='text-bice-blue hover:underline hover:cursor-pointer'> <Link to='/sign-up'>Sign Up</Link></span> 
        </p>
      </section>}
      
    </div>
  )
}

export default Login
