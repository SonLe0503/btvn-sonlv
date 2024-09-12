
import house2 from '../../assets/images/house2.jpg'
import house3 from '../../assets/images/house3.jpg'
import house4 from '../../assets/images/house4.jpg'
import house5 from '../../assets/images/house5.jpg'
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'
import team3 from '../../assets/images/team3.jpg'
import team4 from '../../assets/images/team4.jpg'
import map from '../../assets/images/map.jpg'
import './index.css'
function Page() {
  return (
    <>
      {/* Page content */}
      <div className="w3-content w3-padding custom-page">
        {/* Project Section */}
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img
              className="image-custom"
                src={house5}
                alt="House"
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img
              className="image-custom"
                src={house2}
                alt="House"
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img
              className="image-custom"
                src={house3}
                alt="House"
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img
              className="image-custom"
                src={house4}
                alt="House"
              />
            </div>
          </div>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img
              className="image-custom1"
                src={house2}
                alt="House"
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img
              className="image-custom1"
                src={house5}
                alt="House"
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img
              className="image-custom1"
                src={house4}
                alt="House"
              />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img
              className="image-custom1"
                src={house3}
                alt="House"
              />
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="w3-row-padding w3-grayscale">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
            className="custom-team"
              src={team2}
              alt="John"
            />
            <h3>John Doe</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
            className="custom-team"
              src={team1}
              alt="Jane"
            />
            <h3>Jane Doe</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
            className="custom-team"
              src={team3}
              alt="Mike"
            />
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
            className="custom-team"
              src={team4}
              alt="Dan"
            />
            <h3>Dan Star</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>
        {/* Contact Section */}
        <div className="w3-container w3-padding-32" id="contact">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Contact
          </h3>
          <p>Lets get in touch and talk about your next project.</p>
          <form action="/action_page.php" target="_blank">
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Name"
              required=""
              name="Name"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required=""
              name="Email"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Subject"
              required=""
              name="Subject"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Comment"
              required=""
              name="Comment"
            />
            <button className="w3-button w3-black w3-section" type="submit">
              <i className="fa fa-paper-plane" /> SEND MESSAGE
            </button>
          </form>
        </div>
        {/* Image of location/map */}
        <div className="w3-container">
          <img
            src={map}
            className="w3-image custom-map"
          />
        </div>
        {/* End page content */}
      </div>
    </>
  );
}
export default Page;
