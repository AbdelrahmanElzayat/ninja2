import React from 'react'
import './Location2.css'
import MainLayouts from '../../Layouts/MainLayouts'
import CommonLocation from '../../components/locationComponents/CommonLocation/CommonLocation'
import LocationBox from '../../components/locationComponents/LocationBox/LocationBox'
const Location2 = () => {
  return (
    <MainLayouts>
        <CommonLocation/>
        <LocationBox/>
    </MainLayouts>
  )
}

export default Location2