import React from 'react'
import './AdsSide.css'
import favArticleImg from '../../../../assets/images/favArticleImg.jfif'
const AdsSide = () => {
  return (
    <div className="AdsSide">
      <div className="fav_articles">
        <h2 className="fav_articles_head">ابرز المقالات</h2>
        <div className="fav_articles_cards">
          <div className="fav_articles_card">
            <div className="fav_articles_card_img">
              <img src={favArticleImg} alt="favArticleImg" />
            </div>
            <h3>تعمل اي لو الغساله بتاعتك بايظه</h3>
          </div>
          <div className="fav_articles_card">
            <div className="fav_articles_card_img">
              <img src={favArticleImg} alt="favArticleImg" />
            </div>
            <h3>تعمل اي لو الغساله بتاعتك بايظه</h3>
          </div>
          <div className="fav_articles_card">
            <div className="fav_articles_card_img">
              <img src={favArticleImg} alt="favArticleImg" />
            </div>
            <h3>تعمل اي لو الغساله بتاعتك بايظه</h3>
          </div>
          <div className="fav_articles_card">
            <div className="fav_articles_card_img">
              <img src={favArticleImg} alt="favArticleImg" />
            </div>
            <h3>تعمل اي لو الغساله بتاعتك بايظه</h3>
          </div>
          <div className="fav_articles_card">
            <div className="fav_articles_card_img">
              <img src={favArticleImg} alt="favArticleImg" />
            </div>
            <h3>تعمل اي لو الغساله بتاعتك بايظه</h3>
          </div>
        </div>
      </div>
      <div className="follow_us">
        <h3>تابعنا علي</h3>
        <ul>
          <li>
            <a href="##">
              <i className="ri-instagram-line"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="ri-youtube-fill"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="ri-linkedin-fill"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="ri-twitter-x-line"></i>
            </a>
          </li>
          <li>
            <a href="##">
              <i className="ri-facebook-circle-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdsSide