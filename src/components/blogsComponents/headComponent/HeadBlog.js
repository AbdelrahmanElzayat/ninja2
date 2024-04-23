import React from 'react'
import './HeadBlog.css'
import MainCard from './HeadCards/MainCard'
import HeadCard from './HeadCards/HeadCard'
import blog from '../../../assets/images/main1.jfif'
import blog2 from '../../../assets/images/main2.jfif'
import blog3 from '../../../assets/images/main3.jfif'
import blog4 from '../../../assets/images/main3.jfif'
const HeadBlog = () => {
  return (
    <div className='HeadBlog container'>
        <div className='main1'>
            <HeadCard img={blog}/>
        </div>
        <div className='main2'>
            <HeadCard img={blog2}/>
        </div>
        <MainCard/>
        <div className='main3'>
            <HeadCard img={blog3}/>
        </div>
        <div className='main4'>
            <HeadCard img={blog3}/>
        </div>
    </div>
  )
}

export default HeadBlog