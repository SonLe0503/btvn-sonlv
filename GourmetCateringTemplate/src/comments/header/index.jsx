
import hamburger from '../../assets/images/hamburger.jpg'
import './index.css'
function Header() {
  return (
    <header
      className="w3-display-container w3-content w3-wide header1"
      id="home"
    >
      <img
        className="w3-image"
        src={hamburger}
        alt="Hamburger Catering"
      />
      <div className="w3-display-bottomleft w3-padding-large w3-opacity">
        <h1 className="w3-xxlarge">Le Catering</h1>
      </div>
    </header>
  );
}
export default Header;
