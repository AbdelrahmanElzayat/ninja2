import React from 'react'
import './BlogCard.css'
const HeadCard = (props) => {
  return (
    <div className='HeadCard'>
    <div className='HeadCard_title'>الصيانه</div>
    <div className='HeadCard_img'>
        <img src={props.img} alt='blog_img'/>
    </div>
    <div className='HeadCard_footer'>
        <h4>لو الغساله باظت تعالي اقولك المفروض تعمل اي</h4>
    </div>
</div>
  )
}

export default HeadCard