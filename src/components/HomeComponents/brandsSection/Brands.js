import React from 'react'
import './Brands.css'
import { Container } from 'react-bootstrap'
const Brands = () => {
    const imgs = 
    [
        {className:'brand1'},
        {className:'brand2'},
        {className:'brand3'},
        {className:'brand4'},
        {className:'brand5'},
        {className:'brand6'}
    ]
  return (
    <div className='Brands'>
        <Container>
            <div className='BrandsContainer'>
                {
                    imgs.map((item , index)=>(
                        <div className={`BrandImg_test ${item.className}`} key={index}>
                            
                        </div>          
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Brands