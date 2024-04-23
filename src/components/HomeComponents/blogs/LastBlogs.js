import React from 'react'
import './LastBlogs.css'
import BlogCardList from './BlogCard/BlogCardList'
import { Container } from 'react-bootstrap'

const LastBlogs = () => {
  return (
    <div className='LastBlogs'>
        <div className="mainHead container">
            <h2>اكتشف اخر المقالات</h2>
            <p>نعرض جزء بسيط من اخر المقالات لكي تستفيد منها و تتعلم المزيد عن الاشياء اللي عندك</p>
        </div>
        <Container>
            <div className='seeMore'>
                <a href='##'>عرض الجميع
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path opacity="0.6" d="M12.8333 6.41665L8.25 11L12.8333 15.5833" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M12.8333 6.41665L8.25 11L12.8333 15.5833" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </a>
            </div>
        </Container>
        <BlogCardList/>
    </div>
  )
}

export default LastBlogs