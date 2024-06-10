/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";
import { notify } from "../utils/notify";
import { getRequest } from "../utils/fetchMethods";

export const RegionContext = createContext();

// eslint-disable-next-line react/prop-types
export const RegionProvider = ({ children }) => {
  const [regions, setRegions] = useState();

  const GetRegions = async (params) => {
    try {
      const res = await getRequest(params, `/country/getDataRegionOfBranch`);
      if (!res) {
        throw new Error(res?.msg);
      }
      const transformedResponse = res.map((item) => ({
        value: item.region_id,
        label: item.name_ar,
      }));
      // console.log(res);
      setRegions(transformedResponse);
    } catch (error) {
      notify(error.message, "error");
    }
  };
  const [brand, setBrand] = useState();

  const GetBrands = async (params) => {
    try {
      const res = await getRequest(params, `/country/filterBrandBranch`);
      if (!res) {
        throw new Error(res?.msg);
      }
      if (res?.brand) {
        const transformedResponse = res?.brand?.map((item) => ({
          value: item.id,
          label: item.name_ar,
        }));
        // console.log(res);
        // console.log(res);
        setBrand(transformedResponse);
      }
    //   else{
    //     setBrand(res?.brand);
    //   }
    } catch (error) {
      notify(error.message, "error");
    }
  };

  const [locations, setLocations] = useState([]);
  const getBranchLocation = async (params) => {
    try {
      const res = await getRequest(params, `/country/getBranchLocation`);
      if (!res) {
        throw new Error(res?.msg);
      }
      // console.log(res);
      setLocations(res.brand);
    } catch (error) {
      notify(error.message, "error");
    }
  };
  const [brandSearched , setBrandSearched] = useState([]);
  const getbrandSearched = async (params) => {
    try {
      const res = await getRequest(params, `/category/searchBrand`);
      if (!res) {
        throw new Error(res?.msg);
      }
      // console.log(res);
      setBrandSearched(res);
    } catch (error) {
      notify(error.message, "error");
    }
  };



  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <RegionContext.Provider
      value={{
        GetRegions,
        regions,
        GetBrands,
        brand,
        getBranchLocation,
        locations,

        getbrandSearched,
        brandSearched,
        setBrandSearched
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};
