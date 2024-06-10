import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Blogs from "./pages/Blogs/Blogs.js";
import About from "./pages/About/About.js";
import ContactUs from "./pages/Contact/ContactUs.js";
import BlogDetails from "./pages/BlogDetails/BlogDetails.js";
import Privacy from "./pages/Privacy/Privacy.js";
import UsagePolicy from "./pages/UsagePolicy/UsagePolicy.js";
import NotFound from "./pages/NotFound/NotFound.js";
import Location from "./pages/locations/Location.js";
import Numbers from "./pages/Numbers/Numbers.js";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RedirectToStore from "./pages/redirect/Redirect.js";
import DownloadPage from "./pages/DownloadPage/DownloadPage.js";
import Location2 from "./pages/location2/Location2.js";
import HotLine from "./pages/HotLine/HotLine.js";
function App() {
  // if ("geolocation" in navigator) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log("Latitude:", position.coords.latitude);
  //       console.log("Longitude:", position.coords.longitude);
  //     },
  //     (error) => {
  //       console.error("Error getting geolocation:", error.message);
  //     }
  //   );
  // } else {
  //   console.log("Geolocation is not supported by this browser.");
  // }
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/usage-policy" element={<UsagePolicy />} />
        {/* <Route path="/location" element={<Location />} /> */}
        <Route path="/location" element={<Location2 />} />
        {/* <Route path="/hot-line" element={<Numbers />} /> */}
        <Route path="/hot-line" element={<HotLine />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/download" element={<RedirectToStore />} />
        <Route path="/download-app" element={<DownloadPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
