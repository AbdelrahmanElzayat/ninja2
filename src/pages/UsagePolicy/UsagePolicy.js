import React, { useContext, useEffect, useRef } from "react";
import MainLayouts from "../../Layouts/MainLayouts";
import Common from "../../components/commonSection/Common";
import { Container } from "react-bootstrap";
import { PagesContext } from "../../contextApi/PagesContext";
import { Helmet } from "react-helmet-async";
const UsagePolicy = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  const { GetPage, dataPages } = useContext(PagesContext);
  const pageRef = useRef(true);
  useEffect(() => {
    if (pageRef.current) {
      GetPage({ page_id: 2 });
      pageRef.current = false;
    }
  }, []);
  return (
    <MainLayouts>
        <Helmet>
        <title>نينجا هوم || شروط الإستخدام</title>
        <meta
          name="description"
          content={
            dataPages?.meta ??
            "Get quick, reliable home device repairs with our intuitive web app. Connect with skilled technicians to fix appliances and gadgets hassle-free."
        }
        />
      </Helmet>
      <Common title="شروط الإستخدام" />
      <div className="privacyContent py-4">
        <Container>
          {dataPages && (
            <div
              dangerouslySetInnerHTML={{ __html: dataPages.description }}
            />
          )}
        </Container>
      </div>
    </MainLayouts>
  );
};

export default UsagePolicy;
