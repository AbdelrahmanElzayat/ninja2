import React, { useEffect, useState } from 'react'
import './BlogDetails.css'
import MainLayouts from '../../Layouts/MainLayouts'
import { Col, Container, Row } from 'react-bootstrap'
import Article from '../../components/detailsComponents/articleComponents/articleSide/Article'
import AdsSide from '../../components/detailsComponents/articleComponents/AdsSide/AdsSide'
import MoreArticles from '../../components/detailsComponents/MoreArticles/MoreArticles'
const BlogDetails = () => {
    const [myState, setMyState] = useState('/* your initial state */');

    const handleBeforeUnload = async () => {
      // Your log out or cleanup logic goes here
      console.log("Bye!");
  
      // Your API endpoint
    //   const apiUrl = 'https://example.com/api/data';
  
      try {
        // // Make an API call to send the state
        // const response = await fetch(apiUrl, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(myState),
        // });
  
        // if (response.ok) {
          console.log('State sent successfully.');
        // } else {
        //   console.error('Failed to send state to the API.');
        // }
      } catch (error) {
        console.error('Error sending state to the API:', error);
      }
    };
  
    useEffect(() => {
      // Add event listener when the component mounts
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      // Remove event listener when the component unmounts
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [myState]); 
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  return (
    <MainLayouts>
        <div className='BlogDetails'>
            <Container>
                <Row>
                    <Col lg='9'>
                        <Article/>
                    </Col>
                    <Col lg='3'>
                        <AdsSide/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <MoreArticles/>
                    </Col>
                </Row>
            </Container>
        </div>
    </MainLayouts>
  )
}

export default BlogDetails