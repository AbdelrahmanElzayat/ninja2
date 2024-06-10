import React from 'react'
import MainLayouts from '../../Layouts/MainLayouts'
import CommonHotline from '../../components/HotLineComponents/CommonHotline/CommonHotline'
import HotLineBox from '../../components/HotLineComponents/HotLineBox/HotLineBox'

const HotLine = () => {
  return (
    <MainLayouts>
        <CommonHotline/>
        <HotLineBox/>
    </MainLayouts>
  )
}

export default HotLine