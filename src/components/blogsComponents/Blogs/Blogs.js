import React from 'react'
import './Blogs.css'
import BlogCardList from '../../HomeComponents/blogs/BlogCard/BlogCardList'
import { Container } from 'react-bootstrap'
const BlogsContainer = () => {
  return (
    <div className='Blogs'>
      <Container>
        <div className='Blogs_headerSearch'>
            <h2>احدث المقالات</h2>
            <div className='searchInput'>
              <input type='text' placeholder='بحث'/>
              <i className="ri-search-line"></i>
            </div>            
        </div>
      </Container>
        <BlogCardList/>
        <BlogCardList/>
        <div className='seeMoreBlogs text-center'>
          <a href='##'>عرض المزيد</a>
        </div>
    </div>
  )
}

export default BlogsContainer