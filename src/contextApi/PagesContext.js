/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";
import { notify } from "../utils/notify";
import { getRequest } from "../utils/fetchMethods";

export const PagesContext = createContext();

// eslint-disable-next-line react/prop-types
export const PagesProvider = ({ children }) => {
  const [dataPages, setDataPages] = useState();

  const GetPage = async (params) => {
    try {
      const res = await getRequest(params, `/page`, "ar");
      if (!res) {
        throw new Error(res?.msg);
      }
      // console.log(res);
      setDataPages(res);
    } catch (error) {
      notify(error.message, "error");
    }
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <PagesContext.Provider value={{ GetPage, dataPages }}>
      {children}
    </PagesContext.Provider>
  );
};
