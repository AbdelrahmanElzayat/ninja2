import React from 'react'
import { Container } from 'react-bootstrap'
import BlogCard from './BlogCard'
import blog1 from '../../../../assets/images/blog1.jfif'
import blog2 from '../../../../assets/images/blog2.jfif'
import blog3 from '../../../../assets/images/blog3.jfif'
const BlogCardList = () => {
  return (
    <div className='BlogCardList'>
        <Container>
            <BlogCard img={blog1}/>
            <BlogCard img={blog2}/>
            <BlogCard img={blog3}/>
        </Container>
    </div>
  )
}

export default BlogCardList