import React from "react";
import "./Goals.css";
import { Container } from "react-bootstrap";
import BtnNum from "../../ui/BtnNum/BtnNum";
const Goals = () => {
  return (
    <div className="Goals">
      <Container>
        <div className="QemaContainer">
          <div className="firstIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="89"
              height="81"
              viewBox="0 0 89 81"
              fill="none"
            >
              <path
                d="M57.1168 13.4601C57.1661 13.4081 57.1927 13.3388 57.1909 13.2672C57.189 13.1956 57.1588 13.1276 57.1069 13.0783L47.619 4.07468C47.5933 4.05026 47.563 4.03112 47.5299 4.0184C47.4968 4.00569 47.4614 3.99965 47.426 4.00058C47.3905 4.00151 47.3556 4.00934 47.3232 4.02377C47.2908 4.0382 47.2616 4.05895 47.2372 4.08469L36.6504 15.2408C36.6011 15.2927 36.5744 15.3622 36.5763 15.4338C36.5781 15.5054 36.6083 15.5732 36.6602 15.6225L46.1482 24.6263C46.1739 24.6507 46.2042 24.6698 46.2373 24.6825C46.2704 24.6952 46.3057 24.7013 46.3412 24.7004C46.3766 24.6995 46.4115 24.6915 46.4439 24.6771C46.4763 24.6627 46.5056 24.642 46.53 24.6163L57.1168 13.4601Z"
                stroke="#FBBAB5"
                strokeWidth="0.5"
              />
              <path
                d="M67.592 23.9676C67.6269 23.93 67.654 23.886 67.6718 23.838C67.6897 23.79 67.6979 23.7389 67.6961 23.6878C67.6942 23.6366 67.6822 23.5864 67.6609 23.5398C67.6396 23.4932 67.6093 23.4513 67.5718 23.4164L58.2244 14.7304C58.1487 14.66 58.0481 14.6227 57.9447 14.6265C57.8414 14.6303 57.7438 14.675 57.6734 14.7508L12.9364 62.8935C12.9015 62.931 12.8744 62.975 12.8565 63.023C12.8387 63.071 12.8304 63.1221 12.8323 63.1732C12.8342 63.2244 12.8461 63.2747 12.8674 63.3213C12.8888 63.3679 12.919 63.4097 12.9566 63.4446L22.3039 72.1306C22.3796 72.201 22.4803 72.2383 22.5836 72.2345C22.687 72.2307 22.7846 72.186 22.855 72.1103L67.592 23.9676Z"
                stroke="#FBBAB5"
                strokeWidth="0.5"
              />
              <path
                d="M78.1884 34.5399C78.2507 34.4747 78.2846 34.3875 78.2825 34.2973C78.2804 34.2072 78.2427 34.1216 78.1775 34.0593L68.8656 25.1606C68.8004 25.0983 68.7132 25.0644 68.623 25.0665C68.5329 25.0685 68.4472 25.1063 68.3849 25.1715L58.7816 35.2208C58.7194 35.286 58.6855 35.3732 58.6876 35.4633C58.6897 35.5535 58.7274 35.6391 58.7926 35.7014L68.1045 44.6001C68.1696 44.6624 68.2569 44.6962 68.3471 44.6942C68.4372 44.6921 68.5228 44.6543 68.5851 44.5891L78.1884 34.5399Z"
                stroke="#FBBAB5"
                strokeWidth="0.5"
              />
              <path
                d="M12.5732 17.3203L28.6633 0.250328C28.7419 0.168371 28.8376 0.103809 28.9444 0.0607531C29.0512 0.0176973 29.1666 -0.00289896 29.2833 0.000328313C30.2033 0.0503283 29.7832 0.890358 29.4232 1.28036C23.9165 7.36702 18.3332 13.3836 12.6732 19.3303C12.58 19.4284 12.468 19.5068 12.3441 19.5606C12.2202 19.6145 12.0869 19.6427 11.9523 19.6436C11.8176 19.6446 11.6845 19.6181 11.5609 19.566C11.4373 19.5139 11.3258 19.4371 11.2332 19.3403C7.88654 15.8536 4.55655 12.467 1.24322 9.18038C0.836551 8.77372 0.746592 8.40695 0.973259 8.08028C1.01526 8.0197 1.07009 7.96923 1.13403 7.93221C1.19797 7.8952 1.26949 7.87258 1.34362 7.86593C1.41776 7.85928 1.49275 7.86871 1.56347 7.89364C1.63418 7.91857 1.69892 7.9584 1.75323 8.01034L11.1432 17.3403C11.2377 17.4342 11.35 17.5085 11.4735 17.5584C11.597 17.6084 11.7292 17.6331 11.8624 17.6312C11.9956 17.6293 12.1271 17.601 12.2492 17.5476C12.3713 17.4942 12.4814 17.4168 12.5732 17.3203Z"
                fill="#FC3314"
              />
              <path
                d="M44.894 26.4505C45.0733 26.2597 45.1706 26.0063 45.165 25.7445C45.1594 25.4827 45.0513 25.2336 44.864 25.0506L36.654 17.0206C36.5598 16.9282 36.4481 16.8553 36.3255 16.8063C36.203 16.7572 36.0719 16.7329 35.9399 16.7347C35.8078 16.7366 35.6775 16.7646 35.5563 16.8171C35.4352 16.8696 35.3256 16.9456 35.234 17.0406C23.804 29.0006 12.844 41.4606 1.27403 53.2406C1.16284 53.3556 1.0186 53.4343 0.859967 53.4664C0.701332 53.4985 0.535563 53.4825 0.384015 53.4206C-0.0959852 53.2073 -0.126012 52.8706 0.293988 52.4106C10.0007 41.7373 25.4473 25.1439 46.634 2.63059C46.7251 2.53337 46.8348 2.45536 46.9565 2.4011C47.0782 2.34684 47.2095 2.31747 47.3427 2.31467C47.4759 2.31188 47.6083 2.33563 47.7322 2.38474C47.8561 2.43385 47.9689 2.50724 48.064 2.60056L78.214 32.3506C78.3967 32.5323 78.6432 32.6359 78.9022 32.6396C79.1612 32.6434 79.4126 32.547 79.604 32.3706C82.2507 29.8639 84.744 27.2272 87.084 24.4605C87.764 23.6605 88.1973 23.644 88.384 24.4106C88.4242 24.5702 88.4242 24.7371 88.3841 24.896C88.3439 25.0549 88.2649 25.2007 88.154 25.3205L53.674 62.9206C53.5018 63.1092 53.409 63.3573 53.4146 63.6139C53.4202 63.8705 53.5237 64.1162 53.704 64.3006L62.734 73.3305C62.7645 73.3619 62.7885 73.3991 62.8045 73.4398C62.8205 73.4805 62.8283 73.524 62.8274 73.5677C62.8264 73.6115 62.8168 73.6546 62.7991 73.6946C62.7813 73.7345 62.7558 73.7706 62.724 73.8006L62.514 74.0006C62.4176 74.094 62.289 74.1465 62.1561 74.1465C62.0232 74.1465 61.8967 74.094 61.804 74.0006L52.874 65.1306C52.7787 65.0357 52.6653 64.961 52.5405 64.911C52.4157 64.861 52.2821 64.8367 52.1476 64.8395C52.0132 64.8423 51.8807 64.8722 51.7581 64.9273C51.6355 64.9825 51.5253 65.0619 51.434 65.1606C46.9073 70.054 42.3873 74.9039 37.874 79.7105C35.754 81.9706 36.384 79.4506 37.014 78.7706C46.9807 68.0773 56.9174 57.3606 66.824 46.6206C66.9964 46.4309 67.0902 46.1828 67.0865 45.9266C67.0828 45.6704 66.9818 45.4251 66.804 45.2406L58.784 37.0306C58.6895 36.9339 58.5764 36.857 58.4518 36.8049C58.3271 36.7528 58.1934 36.7265 58.0588 36.7274C57.9241 36.7283 57.7914 36.7566 57.6686 36.8104C57.5457 36.8642 57.4353 36.9426 57.344 37.0406L23.204 73.7506C23.1121 73.8487 23.0013 73.9272 22.8783 73.9815C22.7554 74.0359 22.6227 74.0648 22.4883 74.0666C22.3538 74.0685 22.2204 74.0433 22.096 73.9924C21.9715 73.9415 21.8586 73.8661 21.764 73.7706L12.714 64.6606C12.6188 64.5651 12.5055 64.4894 12.381 64.4381C12.2564 64.3868 12.1231 64.3609 11.9889 64.3618C11.8547 64.3627 11.7222 64.3905 11.5995 64.4436C11.4767 64.4966 11.366 64.5738 11.274 64.6706C8.38736 67.704 5.524 70.7806 2.684 73.9006C2.164 74.4706 1.22399 74.8806 1.35399 73.5406C1.37977 73.3261 1.47426 73.1231 1.624 72.9605L44.894 26.4505ZM57.1172 13.4602C57.1665 13.4083 57.1932 13.3389 57.1913 13.2673C57.1895 13.1957 57.1593 13.1278 57.1073 13.0785L47.6194 4.07481C47.5937 4.05038 47.5634 4.03125 47.5303 4.01853C47.4972 4.00582 47.4619 3.99978 47.4264 4.00071C47.391 4.00164 47.356 4.00947 47.3237 4.0239C47.2913 4.03833 47.262 4.05908 47.2376 4.08482L36.6508 15.2409C36.6015 15.2929 36.5748 15.3624 36.5767 15.4339C36.5786 15.5055 36.6088 15.5734 36.6607 15.6227L46.1486 24.6264C46.1743 24.6509 46.2046 24.6699 46.2377 24.6826C46.2708 24.6953 46.3061 24.7015 46.3416 24.7005C46.3771 24.6996 46.412 24.6917 46.4444 24.6772C46.4768 24.6628 46.506 24.6422 46.5304 24.6164L57.1172 13.4602ZM67.5918 23.9676C67.6267 23.9301 67.6538 23.8861 67.6717 23.8381C67.6895 23.7901 67.6978 23.739 67.6959 23.6878C67.694 23.6367 67.6821 23.5865 67.6608 23.5399C67.6394 23.4933 67.6092 23.4513 67.5716 23.4165L58.2243 14.7304C58.1485 14.6601 58.0479 14.6228 57.9446 14.6266C57.8412 14.6304 57.7436 14.6751 57.6732 14.7508L12.9362 62.8935C12.9013 62.931 12.8742 62.975 12.8564 63.023C12.8385 63.0711 12.8303 63.1221 12.8321 63.1733C12.834 63.2245 12.846 63.2748 12.8673 63.3214C12.8886 63.368 12.9189 63.4098 12.9564 63.4447L22.3037 72.1307C22.3795 72.2011 22.4801 72.2384 22.5835 72.2346C22.6868 72.2308 22.7844 72.1861 22.8548 72.1103L67.5918 23.9676ZM78.1874 34.5401C78.2497 34.4749 78.2835 34.3877 78.2815 34.2976C78.2794 34.2074 78.2416 34.1218 78.1764 34.0595L68.8646 25.1609C68.7994 25.0986 68.7121 25.0647 68.622 25.0667C68.5318 25.0688 68.4462 25.1065 68.3839 25.1717L58.7806 35.221C58.7183 35.2863 58.6845 35.3735 58.6866 35.4636C58.6886 35.5537 58.7264 35.6394 58.7916 35.7016L68.1034 44.6003C68.1686 44.6626 68.2559 44.6965 68.3461 44.6944C68.4362 44.6924 68.5218 44.6545 68.5841 44.5893L78.1874 34.5401Z"
                fill="#FC3314"
              />
              <path
                d="M70.1227 18.7142C70.0166 18.8256 69.8707 18.8902 69.7169 18.894C69.5631 18.8977 69.4141 18.8401 69.3027 18.7341L69.2737 18.7065C69.2186 18.6539 69.1743 18.5911 69.1435 18.5214C69.1126 18.4518 69.0958 18.3769 69.0939 18.3007C69.0921 18.2246 69.1052 18.1487 69.1326 18.0777C69.16 18.0066 69.2012 17.9417 69.2537 17.8865L78.605 8.0667C78.7111 7.95531 78.857 7.89064 79.0108 7.88689C79.1646 7.88314 79.3135 7.94059 79.4249 8.04668L79.454 8.07427C79.5654 8.18036 79.63 8.32637 79.6338 8.48015C79.6375 8.63393 79.58 8.78295 79.4739 8.89434L70.1227 18.7142Z"
                fill="#FC3314"
              />
            </svg>
          </div>
          <h2>أهدافنا</h2>
          <div className="QemaContent">
            <div className="QemaLine">
              <BtnNum>1</BtnNum>
              <div className="QemaTxt">
                <p>
                  أن نصبح الخيار الأول لعملاء صيانة الأجهزة المنزلية في مصر.
                </p>
              </div>
            </div>
            <div className="QemaLine">
              <BtnNum>2</BtnNum>
              <div className="QemaTxt">
                <p>أن نقدم خدمات صيانة عالية الجودة بأسعار مناسبة.</p>
              </div>
            </div>
            <div className="QemaLine">
              <BtnNum>3</BtnNum>
              <div className="QemaTxt">
                <p>أن نكسب ثقة عملائنا من خلال تقديم خدمات موثوقة وفعالة.</p>
              </div>
            </div>
            <div className="QemaLine">
              <BtnNum>4</BtnNum>
              <div className="QemaTxt">
                <p>
                  أن نستخدم أحدث التقنيات وأفضل قطع الغيار لضمان إصلاحات طويلة
                  الأمد.
                </p>
              </div>
            </div>
            <div className="QemaLine">
              <BtnNum>5</BtnNum>
              <div className="QemaTxt">
                <p>
                  أن نجعل عملية خدمات الصيانة أسهل وأكثر يسرًا عبر منصة رقمية.
                </p>
              </div>
            </div>
            <div className="QemaLine">
              <BtnNum>6</BtnNum>
              <div className="QemaTxt">
                <p>أن نرفع مستوى رضا العملاء من خلال تقديم خدمات استثنائية.</p>
              </div>
            </div>
            <div className="QemaLine">
              <BtnNum>7</BtnNum>
              <div className="QemaTxt">
                <p>أن نصبح شركة رائدة في مجال صيانة الأجهزة المنزلية على مستوي مصر.</p>
              </div>
            </div>
          </div>
          <div className="lastIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="89"
              height="81"
              viewBox="0 0 89 81"
              fill="none"
            >
              <path
                d="M57.1168 13.4601C57.1661 13.4081 57.1927 13.3388 57.1909 13.2672C57.189 13.1956 57.1588 13.1276 57.1069 13.0783L47.619 4.07468C47.5933 4.05026 47.563 4.03112 47.5299 4.0184C47.4968 4.00569 47.4614 3.99965 47.426 4.00058C47.3905 4.00151 47.3556 4.00934 47.3232 4.02377C47.2908 4.0382 47.2616 4.05895 47.2372 4.08469L36.6504 15.2408C36.6011 15.2927 36.5744 15.3622 36.5763 15.4338C36.5781 15.5054 36.6083 15.5732 36.6602 15.6225L46.1482 24.6263C46.1739 24.6507 46.2042 24.6698 46.2373 24.6825C46.2704 24.6952 46.3057 24.7013 46.3412 24.7004C46.3766 24.6995 46.4115 24.6915 46.4439 24.6771C46.4763 24.6627 46.5056 24.642 46.53 24.6163L57.1168 13.4601Z"
                stroke="#FBBAB5"
                strokeWidth="0.5"
              />
              <path
                d="M67.592 23.9676C67.6269 23.93 67.654 23.886 67.6718 23.838C67.6897 23.79 67.6979 23.7389 67.6961 23.6878C67.6942 23.6366 67.6822 23.5864 67.6609 23.5398C67.6396 23.4932 67.6093 23.4513 67.5718 23.4164L58.2244 14.7304C58.1487 14.66 58.0481 14.6227 57.9447 14.6265C57.8414 14.6303 57.7438 14.675 57.6734 14.7508L12.9364 62.8935C12.9015 62.931 12.8744 62.975 12.8565 63.023C12.8387 63.071 12.8304 63.1221 12.8323 63.1732C12.8342 63.2244 12.8461 63.2747 12.8674 63.3213C12.8888 63.3679 12.919 63.4097 12.9566 63.4446L22.3039 72.1306C22.3796 72.201 22.4803 72.2383 22.5836 72.2345C22.687 72.2307 22.7846 72.186 22.855 72.1103L67.592 23.9676Z"
                stroke="#FBBAB5"
                strokeWidth="0.5"
              />
              <path
                d="M78.1884 34.5399C78.2507 34.4747 78.2846 34.3875 78.2825 34.2973C78.2804 34.2072 78.2427 34.1216 78.1775 34.0593L68.8656 25.1606C68.8004 25.0983 68.7132 25.0644 68.623 25.0665C68.5329 25.0685 68.4472 25.1063 68.3849 25.1715L58.7816 35.2208C58.7194 35.286 58.6855 35.3732 58.6876 35.4633C58.6897 35.5535 58.7274 35.6391 58.7926 35.7014L68.1045 44.6001C68.1696 44.6624 68.2569 44.6962 68.3471 44.6942C68.4372 44.6921 68.5228 44.6543 68.5851 44.5891L78.1884 34.5399Z"
                stroke="#FBBAB5"
                strokeWidth="0.5"
              />
              <path
                d="M12.5732 17.3203L28.6633 0.250328C28.7419 0.168371 28.8376 0.103809 28.9444 0.0607531C29.0512 0.0176973 29.1666 -0.00289896 29.2833 0.000328313C30.2033 0.0503283 29.7832 0.890358 29.4232 1.28036C23.9165 7.36702 18.3332 13.3836 12.6732 19.3303C12.58 19.4284 12.468 19.5068 12.3441 19.5606C12.2202 19.6145 12.0869 19.6427 11.9523 19.6436C11.8176 19.6446 11.6845 19.6181 11.5609 19.566C11.4373 19.5139 11.3258 19.4371 11.2332 19.3403C7.88654 15.8536 4.55655 12.467 1.24322 9.18038C0.836551 8.77372 0.746592 8.40695 0.973259 8.08028C1.01526 8.0197 1.07009 7.96923 1.13403 7.93221C1.19797 7.8952 1.26949 7.87258 1.34362 7.86593C1.41776 7.85928 1.49275 7.86871 1.56347 7.89364C1.63418 7.91857 1.69892 7.9584 1.75323 8.01034L11.1432 17.3403C11.2377 17.4342 11.35 17.5085 11.4735 17.5584C11.597 17.6084 11.7292 17.6331 11.8624 17.6312C11.9956 17.6293 12.1271 17.601 12.2492 17.5476C12.3713 17.4942 12.4814 17.4168 12.5732 17.3203Z"
                fill="#FC3314"
              />
              <path
                d="M44.894 26.4505C45.0733 26.2597 45.1706 26.0063 45.165 25.7445C45.1594 25.4827 45.0513 25.2336 44.864 25.0506L36.654 17.0206C36.5598 16.9282 36.4481 16.8553 36.3255 16.8063C36.203 16.7572 36.0719 16.7329 35.9399 16.7347C35.8078 16.7366 35.6775 16.7646 35.5563 16.8171C35.4352 16.8696 35.3256 16.9456 35.234 17.0406C23.804 29.0006 12.844 41.4606 1.27403 53.2406C1.16284 53.3556 1.0186 53.4343 0.859967 53.4664C0.701332 53.4985 0.535563 53.4825 0.384015 53.4206C-0.0959852 53.2073 -0.126012 52.8706 0.293988 52.4106C10.0007 41.7373 25.4473 25.1439 46.634 2.63059C46.7251 2.53337 46.8348 2.45536 46.9565 2.4011C47.0782 2.34684 47.2095 2.31747 47.3427 2.31467C47.4759 2.31188 47.6083 2.33563 47.7322 2.38474C47.8561 2.43385 47.9689 2.50724 48.064 2.60056L78.214 32.3506C78.3967 32.5323 78.6432 32.6359 78.9022 32.6396C79.1612 32.6434 79.4126 32.547 79.604 32.3706C82.2507 29.8639 84.744 27.2272 87.084 24.4605C87.764 23.6605 88.1973 23.644 88.384 24.4106C88.4242 24.5702 88.4242 24.7371 88.3841 24.896C88.3439 25.0549 88.2649 25.2007 88.154 25.3205L53.674 62.9206C53.5018 63.1092 53.409 63.3573 53.4146 63.6139C53.4202 63.8705 53.5237 64.1162 53.704 64.3006L62.734 73.3305C62.7645 73.3619 62.7885 73.3991 62.8045 73.4398C62.8205 73.4805 62.8283 73.524 62.8274 73.5677C62.8264 73.6115 62.8168 73.6546 62.7991 73.6946C62.7813 73.7345 62.7558 73.7706 62.724 73.8006L62.514 74.0006C62.4176 74.094 62.289 74.1465 62.1561 74.1465C62.0232 74.1465 61.8967 74.094 61.804 74.0006L52.874 65.1306C52.7787 65.0357 52.6653 64.961 52.5405 64.911C52.4157 64.861 52.2821 64.8367 52.1476 64.8395C52.0132 64.8423 51.8807 64.8722 51.7581 64.9273C51.6355 64.9825 51.5253 65.0619 51.434 65.1606C46.9073 70.054 42.3873 74.9039 37.874 79.7105C35.754 81.9706 36.384 79.4506 37.014 78.7706C46.9807 68.0773 56.9174 57.3606 66.824 46.6206C66.9964 46.4309 67.0902 46.1828 67.0865 45.9266C67.0828 45.6704 66.9818 45.4251 66.804 45.2406L58.784 37.0306C58.6895 36.9339 58.5764 36.857 58.4518 36.8049C58.3271 36.7528 58.1934 36.7265 58.0588 36.7274C57.9241 36.7283 57.7914 36.7566 57.6686 36.8104C57.5457 36.8642 57.4353 36.9426 57.344 37.0406L23.204 73.7506C23.1121 73.8487 23.0013 73.9272 22.8783 73.9815C22.7554 74.0359 22.6227 74.0648 22.4883 74.0666C22.3538 74.0685 22.2204 74.0433 22.096 73.9924C21.9715 73.9415 21.8586 73.8661 21.764 73.7706L12.714 64.6606C12.6188 64.5651 12.5055 64.4894 12.381 64.4381C12.2564 64.3868 12.1231 64.3609 11.9889 64.3618C11.8547 64.3627 11.7222 64.3905 11.5995 64.4436C11.4767 64.4966 11.366 64.5738 11.274 64.6706C8.38736 67.704 5.524 70.7806 2.684 73.9006C2.164 74.4706 1.22399 74.8806 1.35399 73.5406C1.37977 73.3261 1.47426 73.1231 1.624 72.9605L44.894 26.4505ZM57.1172 13.4602C57.1665 13.4083 57.1932 13.3389 57.1913 13.2673C57.1895 13.1957 57.1593 13.1278 57.1073 13.0785L47.6194 4.07481C47.5937 4.05038 47.5634 4.03125 47.5303 4.01853C47.4972 4.00582 47.4619 3.99978 47.4264 4.00071C47.391 4.00164 47.356 4.00947 47.3237 4.0239C47.2913 4.03833 47.262 4.05908 47.2376 4.08482L36.6508 15.2409C36.6015 15.2929 36.5748 15.3624 36.5767 15.4339C36.5786 15.5055 36.6088 15.5734 36.6607 15.6227L46.1486 24.6264C46.1743 24.6509 46.2046 24.6699 46.2377 24.6826C46.2708 24.6953 46.3061 24.7015 46.3416 24.7005C46.3771 24.6996 46.412 24.6917 46.4444 24.6772C46.4768 24.6628 46.506 24.6422 46.5304 24.6164L57.1172 13.4602ZM67.5918 23.9676C67.6267 23.9301 67.6538 23.8861 67.6717 23.8381C67.6895 23.7901 67.6978 23.739 67.6959 23.6878C67.694 23.6367 67.6821 23.5865 67.6608 23.5399C67.6394 23.4933 67.6092 23.4513 67.5716 23.4165L58.2243 14.7304C58.1485 14.6601 58.0479 14.6228 57.9446 14.6266C57.8412 14.6304 57.7436 14.6751 57.6732 14.7508L12.9362 62.8935C12.9013 62.931 12.8742 62.975 12.8564 63.023C12.8385 63.0711 12.8303 63.1221 12.8321 63.1733C12.834 63.2245 12.846 63.2748 12.8673 63.3214C12.8886 63.368 12.9189 63.4098 12.9564 63.4447L22.3037 72.1307C22.3795 72.2011 22.4801 72.2384 22.5835 72.2346C22.6868 72.2308 22.7844 72.1861 22.8548 72.1103L67.5918 23.9676ZM78.1874 34.5401C78.2497 34.4749 78.2835 34.3877 78.2815 34.2976C78.2794 34.2074 78.2416 34.1218 78.1764 34.0595L68.8646 25.1609C68.7994 25.0986 68.7121 25.0647 68.622 25.0667C68.5318 25.0688 68.4462 25.1065 68.3839 25.1717L58.7806 35.221C58.7183 35.2863 58.6845 35.3735 58.6866 35.4636C58.6886 35.5537 58.7264 35.6394 58.7916 35.7016L68.1034 44.6003C68.1686 44.6626 68.2559 44.6965 68.3461 44.6944C68.4362 44.6924 68.5218 44.6545 68.5841 44.5893L78.1874 34.5401Z"
                fill="#FC3314"
              />
              <path
                d="M70.1227 18.7142C70.0166 18.8256 69.8707 18.8902 69.7169 18.894C69.5631 18.8977 69.4141 18.8401 69.3027 18.7341L69.2737 18.7065C69.2186 18.6539 69.1743 18.5911 69.1435 18.5214C69.1126 18.4518 69.0958 18.3769 69.0939 18.3007C69.0921 18.2246 69.1052 18.1487 69.1326 18.0777C69.16 18.0066 69.2012 17.9417 69.2537 17.8865L78.605 8.0667C78.7111 7.95531 78.857 7.89064 79.0108 7.88689C79.1646 7.88314 79.3135 7.94059 79.4249 8.04668L79.454 8.07427C79.5654 8.18036 79.63 8.32637 79.6338 8.48015C79.6375 8.63393 79.58 8.78295 79.4739 8.89434L70.1227 18.7142Z"
                fill="#FC3314"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Goals;
