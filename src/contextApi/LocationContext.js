/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";
import { notify } from "../utils/notify";
import { getRequest } from "../utils/fetchMethods";

export const LocationContext = createContext();

// eslint-disable-next-line react/prop-types
export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState();

  const GetLocations = async (params) => {
    try {
      const res = await getRequest(params, `/country/getBranchLocation`);
      if (!res) {
        throw new Error(res?.msg);
      }
      // console.log(res);
      setLocations(res);
    } catch (error) {
      notify(error.message, "error");
    }
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <LocationContext.Provider value={{ GetLocations, locations }}>
      {children}
    </LocationContext.Provider>
  );
};
