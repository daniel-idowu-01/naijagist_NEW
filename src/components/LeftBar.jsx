import React, {useContext} from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { MdSportsSoccer } from 'react-icons/md'
import { GrMultimedia } from 'react-icons/gr'
import { MdGames } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlineTopic } from 'react-icons/md'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import Logo from '../data/images/new-logo.png'
import { Link } from 'react-router-dom'
import SidebarContext from '../data/context/SidebarContext'

const LeftBar = () => {

  // sidebar context
  const { sidebar } = useContext(SidebarContext)
  const leftComponentStyle = `${sidebar ? 'fixed w-9/12 top-0' : 'w-0'} md:fixed bg-white flex flex-col gap-10 md:w-1/5 py-5 md:py-10 overflow-auto transition-all z-20`
  const component_style = 'flex flex-col items-start pl-5 gap-5'
  const links_style = 'flex gap-2 items-center text-md cursor-pointer hover:underline'

  return (
    <div
    className={leftComponentStyle}>
      <section className={component_style}>
        {/* Logo */}
        <article className='flex items-center mb-4'>
            <Link
             to='/'
             className='cursor-pointer'>
                <img src={Logo} alt="" className='w-7 inline' />
            </Link>    
        </article>

        <article className={links_style}>
          <AiOutlineHome />
          <p>Home</p>
        </article>

        <article className={links_style}>
          <BsArrowUpRightCircle />
          <p>Popular</p>
        </article>
      </section>

      <hr />

      {/* Topics */}
      {/* <section className={component_style}>
        <p className='underline text-black text-opacity-50'>Topics</p>
        <article className={links_style}>
          <MdSportsSoccer />
          <p>Sports</p>
        </article>

        <article className={links_style}>
          <GrMultimedia />
          <p>Entertainment</p>
        </article>

        <article className={links_style}>
          <MdGames />
          <p>Games</p>
        </article>

        <article className={links_style}>
          <AiOutlineLineChart />
          <p>Finance</p>
        </article>
      </section>

      <hr /> */}

      {/* Resources */}
      <section className={component_style}>
        <p className='underline text-black text-opacity-50'>Resources</p>
        <article className={links_style}>
          <AiOutlineInfoCircle />
          <p>About NaijaGist</p>
        </article>

        <article className={links_style}>
          <MdOutlineTopic />
          <p>Topics</p>
        </article>

        <article className={links_style}>
          <AiOutlineQuestionCircle />
          <p>Help</p>
        </article>

        <article className={links_style}>
          <MdOutlinePrivacyTip />
          <p>Privacy Policy</p>
        </article>
      </section>
      


    </div>
  )
}

export default LeftBar
