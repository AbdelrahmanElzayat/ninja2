/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import "./SearchBar.css";
import { RegionContext } from "../../../../contextApi/RegionContext";
const SearchBar = () => {
  const { GetRegions, regions } = useContext(RegionContext);
  const { GetBrands, brand } = useContext(RegionContext);
  const { getBranchLocation } = useContext(RegionContext);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    GetRegions();
    GetBrands({region_id: selectedRegion});
  }, [selectedRegion]);
  useEffect(() => {
    // if (selectedRegion && selectedBrand) {
    if (!selectedRegion && selectedBrand) {
      getBranchLocation({ region_id: selectedRegion, brand_id: selectedBrand });
    } else if (selectedRegion && selectedBrand) {
      getBranchLocation({ region_id: selectedRegion, brand_id: selectedBrand });
    } else if (selectedRegion && !selectedBrand) {
      getBranchLocation();
    } else {
      getBranchLocation();
    }
    // }
  }, [selectedRegion, selectedBrand]);

  const handleRegionChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedRegion(selectedOption.value);
    } else {
      setSelectedRegion(null);
    }
  };

  const handleBrandChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedBrand(selectedOption.value);
    } else {
      setSelectedBrand(null);
    }
  };
  return (
    <div className="w-100 searchBar">
      <SearchInput
        placeholder="...البحث حسب المحافظة"
        options={regions}
        onChange={handleRegionChange}
      />
      <SearchInput
        placeholder="...البحث حسب الماركة"
        options={brand}
        onChange={handleBrandChange}
      />
    </div>
  );
};

export default SearchBar;
