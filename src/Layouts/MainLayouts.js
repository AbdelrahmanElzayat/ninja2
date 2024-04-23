import React from 'react'
import './MainLayout.css'
import Header from '../components/layouts/Header/Header'
import Footer from '../components/layouts/Footer/Footer'
import { useLocation } from 'react-router-dom'
const MainLayouts = (props) => {
  const location = useLocation();

  // Access the pathname from the location object
  const currentPathname = location.pathname;
  return (
    <>
      <Header class={currentPathname === '/' ? `header` : 'header2'}/>
        <main>
            {props.children}
        </main>
      <Footer />
    </>
  );
}

export default MainLayouts