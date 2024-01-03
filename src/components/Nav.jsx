import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from '../data/images/new-logo.png'
import LoginContext from '../data/context/LoginContext'
import SidebarContext from '../data/context/SidebarContext'

const Nav = () => {

    const { login, setLogin } = useContext(LoginContext)
    const { sidebar, setSidebar} = useContext(SidebarContext)

    const nav = 'bg-white md:fixed md:left-[20%] flex items-center justify-between md:gap-7 px-5 py-3 z-50 shadow-md'
    const search_input = 'rounded-full p-3 pl-6 outline-none w-40 md:w-500'
    const search_input_container = 'flex border rounded-full relative items-center px-3'
    const nav_btns = 'bg-bice-blue px-5 py-2 text-white rounded-md'

  return (
    <nav className={nav}>
        
        {/* Logo */}
        <div className='flex items-center'>
            <Link
             to='/'
             className='cursor-pointer'>
                <img src={Logo} alt="" className='w-10 md:w-7 inline' />
                <p className='hidden md:inline blackops md:text-2xl translate-x-1 ml-1'>
                    naija<span className='text-bice-blue'>g</span>ist
                </p>
            </Link>    
        </div>
     
        {/* Search Input */}
        <div className={search_input_container}>
            <AiOutlineSearch className='absolute opacity-50' />
            <input
            className={search_input}
            type="search" placeholder='Search NaijaGist'
            />
        </div>
        
        {/* Log In and Sign Up */}
        <div className='flex items-center gap-5'>
            <Link
             to='/login' 
             onClick={() => setLogin(!login)}>
                <button className={nav_btns}>Log In</button>
            </Link>
        </div>

        {/* Hamburger Menu */}
        <div
         onClick={() => setSidebar(!sidebar)}
         className='md:hidden cursor-pointer'>
            <RxHamburgerMenu className='text-2xl' />
        </div>
    </nav>
  )
}

export default Nav
