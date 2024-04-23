import React, { useEffect } from 'react'
import './ContactUs.css'
import MainLayouts from '../../Layouts/MainLayouts'
import Common from '../../components/commonSection/Common'
import ContactInfo from '../../components/contactComponents/ContactInfo/ContactInfo'
import CommonQuestions from '../../components/contactComponents/CommonQuestions/CommonQuestions'
import SendMessage from '../../components/contactComponents/SendMessage/SendMessage'
import { Helmet } from 'react-helmet-async'
const ContactUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <MainLayouts>
      <Helmet>
        <title>نينجا هوم || تواصل معنا</title>
        <meta
          name="description"
          content={
            "Get quick, reliable home device repairs with our intuitive web app. Connect with skilled technicians to fix appliances and gadgets hassle-free."
        }
        />
      </Helmet>
        <Common title='نحن هنا لمساعدتك' description='اذا كان لديك اي إستفسار او تواجه اي مشكلة فلا تتردد بالتواصل معنا'/>
        <ContactInfo/>
        <CommonQuestions/>
        <SendMessage/>
    </MainLayouts>
  )
}

export default ContactUs