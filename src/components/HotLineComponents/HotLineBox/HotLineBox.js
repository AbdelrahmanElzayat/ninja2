/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./HotLineBox.css";
import { RegionContext } from "../../../contextApi/RegionContext";
import searchJson from "../../../assets/searchJson.png";

const HotLineBox = () => {
  const [word, setWord] = useState("");
  const { brandSearched, getbrandSearched, setBrandSearched } =
    useContext(RegionContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setWord(e.target.value);
  };
  useEffect(() => {
    if (word) {
      getbrandSearched({ search: word });
    } else {
      setBrandSearched([]);
    }
  }, [word]);
  //   console.log(brandSearched);
  return (
    <div className="HotLineBox">
      <Container>
        <div className="HotLineBox_container">
          <div className="searchHotLine">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M17.25 31.5C25.1201 31.5 31.5 25.1201 31.5 17.25C31.5 9.37994 25.1201 3 17.25 3C9.37994 3 3 9.37994 3 17.25C3 25.1201 9.37994 31.5 17.25 31.5Z"
                stroke="#0E7DFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 33L30 30"
                stroke="#0E7DFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="البحث بإسم الفرع..."
              onChange={handleSearch}
            />
          </div>
          <div className="hotLineCardsBox">
            {brandSearched && brandSearched.length > 0 ? (
              brandSearched?.map((item) => (
                <div className="hotLineCard" key={item?.id}>
                  <div className="hotLineCard_right">
                    <div className="hotLineCard_right_head">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M30.9297 12.675C29.3547 5.745 23.3097 2.625 17.9997 2.625C17.9997 2.625 17.9997 2.625 17.9847 2.625C12.6897 2.625 6.62965 5.73 5.05465 12.66C3.29965 20.4 8.03966 26.955 12.3297 31.08C13.9197 32.61 15.9597 33.375 17.9997 33.375C20.0397 33.375 22.0797 32.61 23.6547 31.08C27.9447 26.955 32.6847 20.415 30.9297 12.675ZM17.9997 20.19C15.3897 20.19 13.2747 18.075 13.2747 15.465C13.2747 12.855 15.3897 10.74 17.9997 10.74C20.6097 10.74 22.7247 12.855 22.7247 15.465C22.7247 18.075 20.6097 20.19 17.9997 20.19Z"
                          fill="#0E7DFF"
                        />
                      </svg>
                      <h3>{item?.name_ar} </h3>
                    </div>
                    <div className="hotLineCard_right_body">
                      <p>الخط الساخن</p>
                      <div>{item?.contact_number}</div>
                    </div>
                  </div>
                  <div className="hotLineCard_left">
                    <button className="callBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.62 10.7496C17.19 10.7496 16.85 10.3996 16.85 9.97961C16.85 9.60961 16.48 8.83961 15.86 8.16961C15.25 7.51961 14.58 7.13961 14.02 7.13961C13.59 7.13961 13.25 6.78961 13.25 6.36961C13.25 5.94961 13.6 5.59961 14.02 5.59961C15.02 5.59961 16.07 6.13961 16.99 7.10961C17.85 8.01961 18.4 9.14961 18.4 9.96961C18.4 10.3996 18.05 10.7496 17.62 10.7496Z"
                          fill="white"
                        />
                        <path
                          d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z"
                          fill="white"
                        />
                        <path
                          d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                          fill="white"
                        />
                        <path
                          d="M21.9696 18.3291C21.9696 18.6091 21.9196 18.8991 21.8196 19.1791C21.7896 19.2591 21.7596 19.3391 21.7196 19.4191C21.5496 19.7791 21.3296 20.1191 21.0396 20.4391C20.5496 20.9791 20.0096 21.3691 19.3996 21.6191C19.3896 21.6191 19.3796 21.6291 19.3696 21.6291C18.7796 21.8691 18.1396 21.9991 17.4496 21.9991C16.4296 21.9991 15.3396 21.7591 14.1896 21.2691C13.0396 20.7791 11.8896 20.1191 10.7496 19.2891C10.3596 18.9991 9.96961 18.7091 9.59961 18.3991L12.8696 15.1291C13.1496 15.3391 13.3996 15.4991 13.6096 15.6091C13.6596 15.6291 13.7196 15.6591 13.7896 15.6891C13.8696 15.7191 13.9496 15.7291 14.0396 15.7291C14.2096 15.7291 14.3396 15.6691 14.4496 15.5591L15.2096 14.8091C15.4596 14.5591 15.6996 14.3691 15.9296 14.2491C16.1596 14.1091 16.3896 14.0391 16.6396 14.0391C16.8296 14.0391 17.0296 14.0791 17.2496 14.1691C17.4696 14.2591 17.6996 14.3891 17.9496 14.5591L21.2596 16.9091C21.5196 17.0891 21.6996 17.2991 21.8096 17.5491C21.9096 17.7991 21.9696 18.0491 21.9696 18.3291Z"
                          fill="white"
                        />
                      </svg>
                      <a href={`tel:${item?.contact_number}`}>اتـصـال</a>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <img src={searchJson} alt="search" />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HotLineBox;
