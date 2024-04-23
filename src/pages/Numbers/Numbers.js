import React, { useEffect } from "react";
import MainLayouts from "../../Layouts/MainLayouts";
import Common from "../../components/commonSection/Common";
import { Container } from "react-bootstrap";
import BlogCardList from "../../components/HomeComponents/blogs/BlogCard/BlogCardList";

const Numbers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <MainLayouts>
      <Common
        title={"ارقاام الخط الساخن لجميع مراكز الصيامنه في مصر"}
        description={"الخط الساخن لكل مراكز الصيانه المعتمده"}
      />
      <div className="Blogs">
        <Container>
          <div className="Blogs_headerSearch">
            <div className="searchInput">
              <input type="text" placeholder="بحث" />
              <i className="ri-search-line"></i>
            </div>
          </div>
        </Container>
        <BlogCardList />
        <BlogCardList />
      </div>
    </MainLayouts>
  );
};

export default Numbers;
