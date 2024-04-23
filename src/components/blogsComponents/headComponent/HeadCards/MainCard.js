import React from 'react'
import './BlogCard.css'
import blog from '../../../../assets/images/blogImg.jfif'
const MainCard = () => {
  return (
    <div className='MainCard'>
        <div className='MainCard_title'>الصيانه</div>
        <div className='MainCard_img'>
            <img src={blog} alt='blog_img'/>
        </div>
        <div className='MainCard_footer'>
            <h4>لو الغساله باظت تعالي اقولك المفروض تعمل اي</h4>
        </div>
    </div>
  )
}

export default MainCard