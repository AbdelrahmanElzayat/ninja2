import React, { useEffect } from 'react'
import './Blogs.css'
import MainLayouts from '../../Layouts/MainLayouts'
import HeadBlog from '../../components/blogsComponents/headComponent/HeadBlog'
import BlogsContainer from '../../components/blogsComponents/Blogs/Blogs'
const Blogs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <MainLayouts>
        <HeadBlog/>
        <BlogsContainer/>
        {/* <Blogs/> */}
    </MainLayouts>
  )
}

export default Blogs