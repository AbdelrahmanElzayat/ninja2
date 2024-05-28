import { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

const usePageViews = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default usePageViews;
