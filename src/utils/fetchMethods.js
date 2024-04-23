/* eslint-disable no-unused-vars */
import axios from "axios";
import Cookies from "js-cookie";

// export const postRequest = async (body, endPoint) => {
//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_BASE_URL}${endPoint}`,
//       body,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: "Bearer " + Cookies.get("token"),
//         },
//       }
//     );
//     return response.data;
//   } catch (err) {
//     throw new Error(err.response.data.msg);
//   }
// };

export const getRequest = async (params, endPoint,lang) => {
  const headers = {
    Authorization: "Bearer " + Cookies.get("token"),
    'Accept-Language' : lang
  };

  try {
    const response = axios
      .get(`${process.env.REACT_APP_BASE_URL}${endPoint}`, { headers, params })
      .then((response) => response.data);

    return response;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};


