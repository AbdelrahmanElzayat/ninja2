import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  return (
    <div className='BlogCard mb-5'>
      <Link to={'/blogDetails'}>
        <div className='BlogCard_img'>
            <img src={props.img} alt='blog1'/>
        </div>
        <div className='BlogCard_content'>
            <span className='BlogCard_content_date'> 28 فبراير 2023 </span>
            <h4>لو الغساله باظت تعالي اقولك المفروض تعمل اي</h4>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،  مولد النص العربى مفيد.</p>
            <a href='##'>القسم الذي ينتمي اليه الموضوع</a>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard