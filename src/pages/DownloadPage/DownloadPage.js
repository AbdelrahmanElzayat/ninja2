import React from 'react'
import MainLayouts from '../../Layouts/MainLayouts'
import DownloadHero from '../../components/DownloadPage/DownloadHero/DownloadHero'
import Advantage from '../../components/DownloadPage/DownloadAdvantage/Advantage'
import Feedback from '../../components/DownloadPage/feedback/Feedback'
import SwiperMobile from '../../components/DownloadPage/swiperMobile/SwiperMobile'
import FooterDownload from '../../components/DownloadPage/footerDownload/FooterDownload'

const DownloadPage = () => {
  return (
    <MainLayouts>
        <DownloadHero/>
        <Advantage/>
        <Feedback/>
        <SwiperMobile /> 
        <FooterDownload/>
    </MainLayouts>
  )
}

export default DownloadPage