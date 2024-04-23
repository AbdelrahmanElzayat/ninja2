/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MainLayouts from "../../Layouts/MainLayouts";

// import GoogleMapReact from "google-map-react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Container } from "react-bootstrap";
import LocationCardList from "./LocationCard/LocationCardList";
import "./Location.css";
import Common from "../../components/commonSection/Common";
import { LocationContext } from "../../contextApi/LocationContext";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Location = () => {
  const { GetLocations, locations } = useContext(LocationContext);
  useEffect(() => {
    GetLocations({ region_id: 1, brand_id: 3 });
  }, []);
  // console.log(locations.brand);
  // const mapContainerStyle = {
  //   width: "100vw",
  //   height: "100vh",
  // };

  // const center = {
  //   lat: 30.786509,
  //   lng: 31.000376,
  // };
  // const markerPosition = {
  //   lat: 30.786509,
  //   lng: 31.000376,
  // };

  // const defaultProps = {
  //   center: {
  //     lat: 30.786509,
  //     lng: 31.000376,
  //   },
  //   zoom: 11,
  // };

  const position = { lat: 30.786509, lng: 31.000376 };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainLayouts>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div> */}
      {/* <LoadScript googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript> */}
      <Common
        title="أماكن الفروع"
        description="اماكن فروع كل مراكز الصيانه المعتمده"
      />
      <div className="location">
        <Container>
          <div className="locationContainer">
            <div className="RSideLocation">
              <div className="searchLocation">
                <input type="text" placeholder="أدخل اسم الفرع" />
                <i className="ri-search-line"></i>
              </div>
              <div className="listCards">
                <LocationCardList cards={locations?.brand ?? []} />
              </div>
            </div>
            {/* <div style={{ height: "80vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.cen ter}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                  >
                    <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                  </GoogleMapReact>
            </div> */}
            <div style={{ height: "80vh", width: "100%" }}>
              <APIProvider apiKey={""}>
                <Map
                  defaultCenter={position}
                  defaultZoom={20}
                  disableZoomControl={false}
                >
                  <Marker position={position} />
                </Map>
              </APIProvider>
            </div>
          </div>
        </Container>
      </div>
    </MainLayouts>
  );
};

export default Location;
