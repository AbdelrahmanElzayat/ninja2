import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import logo from "../../../assets/images/logoFooter.png";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Function to check if device is iOS
    const isIOS = () => {
      return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    };

    // Function to check if device is Android
    const isAndroid = () => {
      return /android/i.test(userAgent);
    };

    // Function to check if device is Windows
    const isWindows = () => {
      return /windows/i.test(userAgent);
    };

    // Function to check if device is Mac
    const isMac = () => {
      return /macintosh|mac os x/i.test(userAgent);
    };

    //   console.log(isIOS());

    if (isIOS() || isMac()) {
      setUrl("https://apps.apple.com/eg/app/id6496852097");
    } else if (isAndroid() || isWindows()) {
      setUrl("https://play.google.com/store/apps/details?id=net.ninjaHome.app");
    } else {
      // Default redirection if platform is not recognized
      setUrl("https://play.google.com/store/apps/details?id=net.ninjaHome.app");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <footer className={`footer ${props.class}`}>
      <div className="footerSub">
        <Container>
          <div className="footer_container">
            <div className="footer_right">
              <div className="logoFooter">
                <Link to={"/"}>
                  <img src={logo} alt="ninja" />
                </Link>
              </div>
              <p>
                نينجا هوم كل خدمات بيتك ب تكة زرار <br /> حمل التطبيق و استمتع
                الان بتجربه الخدمات
              </p>
            </div>
            <div className="footer_left">
              <ul>
                <li>
                  <a href="##">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M19.0902 1.9834H22.6042L14.9271 10.7579L23.9587 22.6979H16.887L11.3483 15.4564L5.01069 22.6979H1.49453L9.70599 13.3127L1.04199 1.9834H8.29315L13.2997 8.60249L19.0902 1.9834ZM17.8569 20.5946H19.8041L7.23511 3.97624H5.1456L17.8569 20.5946Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2430_1002)">
                        <path
                          d="M12.5 2.25098C15.8398 2.25098 16.2354 2.26562 17.5488 2.32422C18.7695 2.37793 19.4287 2.58301 19.8682 2.75391C20.4492 2.97852 20.8691 3.25195 21.3037 3.68652C21.7432 4.12598 22.0117 4.54102 22.2363 5.12207C22.4072 5.56152 22.6123 6.22559 22.666 7.44141C22.7246 8.75977 22.7393 9.15527 22.7393 12.4902C22.7393 15.8301 22.7246 16.2256 22.666 17.5391C22.6123 18.7598 22.4072 19.4189 22.2363 19.8584C22.0117 20.4395 21.7383 20.8594 21.3037 21.2939C20.8643 21.7334 20.4492 22.002 19.8682 22.2266C19.4287 22.3975 18.7646 22.6025 17.5488 22.6563C16.2305 22.7148 15.835 22.7295 12.5 22.7295C9.16016 22.7295 8.76465 22.7148 7.45117 22.6563C6.23047 22.6025 5.57129 22.3975 5.13184 22.2266C4.55078 22.002 4.13086 21.7285 3.69629 21.2939C3.25684 20.8545 2.98828 20.4395 2.76367 19.8584C2.59277 19.4189 2.3877 18.7549 2.33398 17.5391C2.27539 16.2207 2.26074 15.8252 2.26074 12.4902C2.26074 9.15039 2.27539 8.75488 2.33398 7.44141C2.3877 6.2207 2.59277 5.56152 2.76367 5.12207C2.98828 4.54102 3.26172 4.12109 3.69629 3.68652C4.13574 3.24707 4.55078 2.97852 5.13184 2.75391C5.57129 2.58301 6.23535 2.37793 7.45117 2.32422C8.76465 2.26562 9.16016 2.25098 12.5 2.25098ZM12.5 0C9.10645 0 8.68164 0.0146484 7.34863 0.0732422C6.02051 0.131836 5.10742 0.34668 4.31641 0.654297C3.49121 0.976562 2.79297 1.40137 2.09961 2.09961C1.40137 2.79297 0.976562 3.49121 0.654297 4.31152C0.34668 5.10742 0.131836 6.01562 0.0732422 7.34375C0.0146484 8.68164 0 9.10645 0 12.5C0 15.8936 0.0146484 16.3184 0.0732422 17.6514C0.131836 18.9795 0.34668 19.8926 0.654297 20.6836C0.976562 21.5088 1.40137 22.207 2.09961 22.9004C2.79297 23.5938 3.49121 24.0234 4.31152 24.3408C5.10742 24.6484 6.01562 24.8633 7.34375 24.9219C8.67676 24.9805 9.10156 24.9951 12.4951 24.9951C15.8887 24.9951 16.3135 24.9805 17.6465 24.9219C18.9746 24.8633 19.8877 24.6484 20.6787 24.3408C21.499 24.0234 22.1973 23.5938 22.8906 22.9004C23.584 22.207 24.0137 21.5088 24.3311 20.6885C24.6387 19.8926 24.8535 18.9844 24.9121 17.6563C24.9707 16.3232 24.9854 15.8984 24.9854 12.5049C24.9854 9.11133 24.9707 8.68652 24.9121 7.35352C24.8535 6.02539 24.6387 5.11231 24.3311 4.32129C24.0234 3.49121 23.5986 2.79297 22.9004 2.09961C22.207 1.40625 21.5088 0.976563 20.6885 0.65918C19.8926 0.351562 18.9844 0.136719 17.6562 0.078125C16.3184 0.0146484 15.8936 0 12.5 0Z"
                          fill="white"
                        />
                        <path
                          d="M12.5 6.0791C8.95508 6.0791 6.0791 8.95508 6.0791 12.5C6.0791 16.0449 8.95508 18.9209 12.5 18.9209C16.0449 18.9209 18.9209 16.0449 18.9209 12.5C18.9209 8.95508 16.0449 6.0791 12.5 6.0791ZM12.5 16.665C10.2002 16.665 8.33496 14.7998 8.33496 12.5C8.33496 10.2002 10.2002 8.33496 12.5 8.33496C14.7998 8.33496 16.665 10.2002 16.665 12.5C16.665 14.7998 14.7998 16.665 12.5 16.665Z"
                          fill="white"
                        />
                        <path
                          d="M20.6738 5.8252C20.6738 6.65528 20 7.32422 19.1748 7.32422C18.3447 7.32422 17.6758 6.65039 17.6758 5.8252C17.6758 4.99512 18.3496 4.32617 19.1748 4.32617C20 4.32617 20.6738 5 20.6738 5.8252Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2430_1002">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="##">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2430_1001)">
                        <path
                          d="M12.5 0C5.5965 0 0 5.5965 0 12.5C0 18.362 4.036 23.281 9.4805 24.632V16.32H6.903V12.5H9.4805V10.854C9.4805 6.5995 11.406 4.6275 15.583 4.6275C16.375 4.6275 17.7415 4.783 18.3005 4.938V8.4005C18.0055 8.3695 17.493 8.354 16.8565 8.354C14.807 8.354 14.015 9.1305 14.015 11.149V12.5H18.098L17.3965 16.32H14.015V24.9085C20.2045 24.161 25.0005 18.891 25.0005 12.5C25 5.5965 19.4035 0 12.5 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2430_1001">
                          <rect width="25" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
              <ul className="footerSub_center_links">
                <li>
                  <Link to={'/download-ninja'}>
                    تحميل التطبيق
                  </Link>
                </li>
                <li>
                  <Link to={"/hot-line"}>الخط الساخن</Link>
                </li>
                <li>
                  <Link to={"/location"}>أماكن الفروع</Link>
                </li>
                <li>
                  <Link to={"/privacy-policy"}>سياسة الخصوصية</Link>
                </li>
                <li>
                  <Link to={"/usage-policy"}>شروط الإستخدام</Link>
                </li>
              </ul>
            </div>
          </div>
          <span>نينجا هوم احدي مشروعات شركة سوقني 2024 © جميع الحقوق محفوظة</span>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
