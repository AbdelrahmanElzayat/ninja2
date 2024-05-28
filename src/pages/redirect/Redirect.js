import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const RedirectToStore = () => {
    const navigate = useNavigate();
  
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
        window.location.href = 'https://apps.apple.com/eg/app/id6496852097';
      } else if (isAndroid() || isWindows()) {
        window.location.href = 'https://play.google.com/store/apps/details?id=net.ninjaHome.app';
      } else {
        // Default redirection if platform is not recognized
        window.location.href = 'https://play.google.com/store/apps/details?id=net.ninjaHome.app';
      }
    }, [navigate]);
  
    return <div>Redirecting...</div>;
  };
  
  export default RedirectToStore