import React from 'react'
import { Container } from 'react-bootstrap'
import ReviewCard from './ReviewCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const ReviewList = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
      const CustomLeftArrow = ({ onClick, ...rest }) => {
        return (
          <button onClick={onClick} {...rest} className="custom_btn_right">
            {/* You can use your own custom arrow component or icons here */}
            {/* <FaChevronLeft /> */}
            <i className="ri-arrow-right-s-line"></i>
          </button>
        );
      };
    
      const CustomRightArrow = ({ onClick, ...rest }) => {
        return (
          <button onClick={onClick} {...rest} className="custom_btn_left">
            {/* You can use your own custom arrow component or icons here */}
            {/* <FaChevronRight /> */}
            {/* right */}
          <i className="ri-arrow-left-s-line"></i>
          </button>
        );
      };
    
  return (
    <div className='ReviewList'>
        <Container>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out" // Customize the transition here
          transitionDuration={300} // Set the duration of the transition
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomRightArrow />} 
          customLeftArrow={<CustomLeftArrow />}
        >
    {/* Your carousel content goes here */}
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
    {/* ... */}
      </Carousel>
        </Container>
    </div>
  )
}

export default ReviewList