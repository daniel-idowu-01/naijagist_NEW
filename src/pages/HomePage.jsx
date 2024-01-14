import React from 'react'
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import Content from '../components/Content';

const HomePage = () => {
  return (
    <div className='flex'>
      <LeftBar />
      <Content />
      <RightBar />
    </div>
  )
}

export default HomePage
