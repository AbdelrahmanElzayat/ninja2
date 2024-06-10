import React from "react";

const CardLocation = ({ item }) => {
  const handleBtn = ()=>{
    // window.location.href = item?.location_map;
    window.open(item?.location_map, '_blank');
  }
  return (
    <div className="CardLocation">
      <div className="CardLocation_header">
        <h2 className="CardLocation_title">
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
          {item?.title}
        </h2>
        <button onClick={handleBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.15039 7.49023C8.59039 7.49023 8.15039 7.94023 8.15039 8.49023C8.15039 9.04023 8.60039 9.49023 9.15039 9.49023C9.70039 9.49023 10.1504 9.04023 10.1504 8.49023C10.1504 7.94023 9.70039 7.49023 9.15039 7.49023Z"
              fill="white"
            />
            <path
              d="M21.46 5.04C20.62 3.09 18.77 2 16.19 2H7.81C4.6 2 2 4.6 2 7.81V16.19C2 18.77 3.09 20.62 5.04 21.46C5.23 21.54 5.45 21.49 5.59 21.35L21.35 5.59C21.5 5.44 21.55 5.22 21.46 5.04ZM10.53 12.24C10.14 12.62 9.63 12.8 9.12 12.8C8.61 12.8 8.1 12.61 7.71 12.24C6.69 11.28 5.57 9.75 6 7.93C6.38 6.28 7.84 5.54 9.12 5.54C10.4 5.54 11.86 6.28 12.24 7.94C12.66 9.75 11.54 11.28 10.53 12.24Z"
              fill="white"
            />
            <path
              d="M19.4709 20.5295C19.6909 20.7495 19.6609 21.1095 19.3909 21.2595C18.5109 21.7495 17.4409 21.9995 16.1909 21.9995H7.81087C7.52087 21.9995 7.40087 21.6595 7.60087 21.4595L13.6409 15.4195C13.8409 15.2195 14.1509 15.2195 14.3509 15.4195L19.4709 20.5295Z"
              fill="white"
            />
            <path
              d="M21.9998 7.81087V16.1909C21.9998 17.4409 21.7498 18.5209 21.2598 19.3909C21.1098 19.6609 20.7498 19.6809 20.5298 19.4709L15.4098 14.3509C15.2098 14.1509 15.2098 13.8409 15.4098 13.6409L21.4498 7.60087C21.6598 7.40087 21.9998 7.52087 21.9998 7.81087Z"
              fill="white"
            />
          </svg>
          اعرف الطريق
        </button>
      </div>
      <div className="CardLocation_body">
        <div className="CardLocation_body_info">
          <h3>رقم الهاتف</h3>
          <div className="mobileList">
            {item?.phone_numbers?.map((it, index) => (
              <div key={index}>{it}</div>
            ))}
            {/* 012139848 - 012812372 - 88734837 */}
          </div>
        </div>
        <div className="CardLocation_body_info mail">
          <h3>البريد الإلكتروني</h3>
          <div className="mobileList">{item?.email}</div>
        </div>
        <div className="CardLocation_body_info">
          <h3>مواعيد العمل </h3>
          <div className="mobileList">{item?.working_hours}</div>
        </div>
        <div className="CardLocation_body_info mail">
          <h3>العنوان</h3>
          <div className="mobileList">{item?.address}</div>
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
