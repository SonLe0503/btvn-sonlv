import "./App.css";
import "./styles/w3.css";
import "./styles/css.css";
import "./styles/my.css";
import Navbar from "./components/navbar/index";
import NavbarOn from "./components/navbarOn/index";
import Page from "./components/page/index";
import { useState } from "react";
import Footer from "./components/footer/index";
function App() {
  const [isShow, setIsShow] = useState(false);
  function setShowNavbarOn() {
    setIsShow(!isShow);
  }
  return (
    <>
      {/* Navbar */}
      <Navbar setShowNavbarOn={setShowNavbarOn} />
      {/* Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
      <NavbarOn isShow={isShow} />
      {/* Page content */}
      <Page />
      <Footer/>
    </>
  );
}

export default App;
