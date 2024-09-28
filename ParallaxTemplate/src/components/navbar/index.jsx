
import { useState, useEffect } from 'react';
function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleFunction = () =>{
    setIsMenu(!isMenu);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {/* Navbar (sit on top) */}
      <div className={`w3-top ${isScrolled ? 'w3-white' : ''}`}>
        <div className="w3-bar" id="myNavbar">
          <a
            className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
            onClick={toggleFunction}
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars" />
          </a>
          <a href="#home" className="w3-bar-item w3-button">
            HOME
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-hide-small">
            <i className="fa fa-user" /> ABOUT
          </a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small">
            <i className="fa fa-th" /> PORTFOLIO
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-hide-small">
            <i className="fa fa-envelope" /> CONTACT
          </a>
          <a
            href="#"
            className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red"
          >
            <i className="fa fa-search" />
          </a>
        </div>
        {/* Navbar on small screens */}
        <div
          id="navDemo"
          className={`w3-bar-block w3-white ${isMenu ? 'w3-show' : 'w3-hide'} w3-hide-large w3-hide-medium`}
        >
          <a
            href="#about"
            className="w3-bar-item w3-button"
            onClick={toggleFunction}
          >
            ABOUT
          </a>
          <a
            href="#portfolio"
            className="w3-bar-item w3-button"
            onClick={toggleFunction}
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button"
            onClick={toggleFunction}
          >
            CONTACT
          </a>
          <a href="#" className="w3-bar-item w3-button">
            SEARCH
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
