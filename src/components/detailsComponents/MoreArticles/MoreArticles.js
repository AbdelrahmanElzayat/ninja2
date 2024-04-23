import React from 'react'
import './MoreArticles.css'
import BlogCardList from '../../HomeComponents/blogs/BlogCard/BlogCardList'
const MoreArticles = () => {
  return (
    <div className='MoreArticles mt-5'>
        <h2 className='MoreArticles_head'>يمكنك ايضا قراءه</h2>
        <div className='MoreArticles_cards'>
            <BlogCardList/>
            <BlogCardList/>
        </div>
    </div>
  )
}

export default MoreArticles