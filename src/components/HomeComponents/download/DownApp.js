import React from 'react'
import './DownApp.css'
import { Container } from 'react-bootstrap'
import playStore from '../../../assets/images/button-Play.png'
import appStore from '../../../assets/images/button-app.png'
const DownApp = () => {
  return (
    <div className='DownApp'>
        <Container>
            <h2>
            جميع خدمات صيانة الأجهزة المنزلية الان بضغطة زر<br/>
حمل التطبيق الان  
            </h2>
            <div className='downBadges'>
                <a href='##'>
                    <img src={playStore} alt=''/>
                </a>
                <a href='##'>
                    <img src={appStore} alt=''/>
                </a>
            </div>
        </Container>
    </div>
  )
}

export default DownApp