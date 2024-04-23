import React, { useEffect } from 'react'
import './About.css'
import MainLayouts from '../../Layouts/MainLayouts'
import Common from '../../components/commonSection/Common'
import NotesAbout from '../../components/aboutComponents/notesAbout/NotesAbout'
import Qema from '../../components/aboutComponents/Qema/Qema'
import Goals from '../../components/aboutComponents/Goals/Goals'
import { Helmet } from 'react-helmet-async'
const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <MainLayouts>
      <Helmet>
        <title>نينجا هوم || من نحن</title>
        <meta
          name="description"
          content={
            "Get quick, reliable home device repairs with our intuitive web app. Connect with skilled technicians to fix appliances and gadgets hassle-free."
        }
        />
      </Helmet>
        <Common title='من نحن' description='تعرف أكثر علي نينجا هوم وأهدافها'/>
        <NotesAbout/>
        <Qema/>
        <Goals/>
    </MainLayouts>
  )
}

export default About