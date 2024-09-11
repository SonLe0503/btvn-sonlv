
import './index.css'
function NavbarOn(props) {
  // eslint-disable-next-line react/prop-types
  const { isShow } = props;
  return (
    <>
      <div
        id="nav-demo"
        className={`w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-tope ${isShow ? 'w3-show' : ''}`}
      >
        <a
          href="#band"
          className="w3-bar-item w3-button w3-padding-large"
        >
          BAND
        </a>
        <a
          href="#tour"
          className="w3-bar-item w3-button w3-padding-large"
        >
          TOUR
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large"
        >
          CONTACT
        </a>
        <a 
          href="#"
          className="w3-bar-item w3-button w3-padding-large"
        >
          MERCH
        </a>
      </div>
    </>
  );
}
export default NavbarOn;
