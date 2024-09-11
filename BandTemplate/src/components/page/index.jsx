
import {useState, useEffect} from 'react';
import './index.css';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import rdimage1 from '../../assets/images/rdimage1.jpg';
import newyork from '../../assets/images/newyork.jpg';
import paris from '../../assets/images/paris.jpg';
import sanfran from '../../assets/images/sanfran.jpg';
const slides = [
  {
    key: 1,
    image: image1,
    text: 'We had the best time playing at Venice Beach!',
    city: 'Los Angeles'
  },
  {
    key: 2,
    image: image2,
    text: 'The atmosphere in New York is lorem ipsum.',
    city: 'New York',
  },
  {
    key: 3,
    image: image3,
    text: 'Thank you, Chicago - A night we won`t forget.',
    city: 'Chicago'
  }
]
function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };



  const [keySlide, setKeySlide] = useState(1);
  let slideShow = slides.filter(elm => elm.key === keySlide);
  useEffect(() => {
    const timeout = setInterval(() => {
      let newKey = keySlide + 1
      setKeySlide(newKey > 3 ? 1 : newKey);
      clearInterval(timeout)
    }, 4000);
    
  }, [keySlide])
  return (
    <>
      <div className="w3-content" >
        {/* Automatic Slideshow Images */}
        {/* <div className="mySlides w3-display-container w3-center">
          <img src={image1} className="image"/>
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Los Angeles</h3>
            <p>
              <b>We had the best time playing at Venice Beach!</b>
            </p>
          </div>
        </div>
        <div className="mySlides w3-display-container w3-center">
          <img src={image2} className="image" />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>New York</h3>
            <p>
              <b>The atmosphere in New York is lorem ipsum.</b>
            </p>
          </div>
        </div>
        <div className="mySlides w3-display-container w3-center">
          <img src={image3} className="image" />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Chicago</h3>
            <p>
              <b>Thank you, Chicago - A night we won`t forget.</b>
            </p>
          </div>
        </div> */}
        {
          slideShow.length && slideShow.map((slide) => {
            return (<div className="w3-display-container w3-center" key={slide}>
              <img src={slide.image} className="image"/>
              <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                <h3>{slide.city}</h3>
                <p>
                  <b>{slide.text}</b>
                </p>
              </div>
            </div>)
          })
        }
        {/* The Band Section */}
        <div
          className="w3-container w3-content w3-center w3-padding-64"
          id="band"
        >
          <h2 className="w3-wide">THE BAND</h2>
          <p className="w3-opacity">
            <i>We love music</i>
          </p>
          <p className="w3-justify">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <div className="w3-row w3-padding-32">
            <div className="w3-third">
              <p>Name</p>
              <img
                src={rdimage1}
                className="w3-round w3-margin-bottom custom-image1"
                alt="Random Name"
              />
            </div>
            <div className="w3-third">
              <p>Name</p>
              <img
                src={rdimage1}
                className="w3-round w3-margin-bottom custom-image2"
                alt="Random Name"
              />
            </div>
            <div className="w3-third">
              <p>Name</p>
              <img
                src={rdimage1}
                className="w3-round custom-image3"
                alt="Random Name"
              />
            </div>
          </div>
        </div>
        {/* The Tour Section */}
        <div className="w3-black" id="tour">
          <div
            className="w3-container w3-content w3-padding-64 section1"
          >
            <h2 className="w3-wide w3-center">TOUR DATES</h2>
            <p className="w3-opacity w3-center">
              <i>Remember to book your tickets!</i>
            </p>
            <br />
            <ul className="w3-ul w3-border w3-white w3-text-grey">
              <li className="w3-padding">
                September{" "}
                <span className="w3-tag w3-red w3-margin-left">Sold out</span>
              </li>
              <li className="w3-padding">
                October{" "}
                <span className="w3-tag w3-red w3-margin-left">Sold out</span>
              </li>
              <li className="w3-padding">
                November{" "}
                <span className="w3-badge w3-right w3-margin-right">3</span>
              </li>
            </ul>
            <div
              className="w3-row-padding w3-padding-32 section2"
              style={{ margin: "0 -16px" }}
            >
              <div className="w3-third w3-margin-bottom">
                <img
                  src={newyork}
                  alt="New York"
                  style={{ width: "100%" }}
                  className="w3-hover-opacity"
                />
                <div className="w3-container w3-white">
                  <p>
                    <b>New York</b>
                  </p>
                  <p className="w3-opacity">Fri 27 Nov 2016</p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    className="w3-button w3-black w3-margin-bottom"
                    onClick={openModal}
                  >
                    Buy Tickets
                  </button>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom">
                <img
                  src={paris}
                  alt="Paris"
                  style={{ width: "100%" }}
                  className="w3-hover-opacity"
                />
                <div className="w3-container w3-white">
                  <p>
                    <b>Paris</b>
                  </p>
                  <p className="w3-opacity">Sat 28 Nov 2016</p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    className="w3-button w3-black w3-margin-bottom"
                    onClick={openModal}
                  >
                    Buy Tickets
                  </button>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom">
                <img
                  src={sanfran}
                  alt="San Francisco"
                  style={{ width: "100%" }}
                  className="w3-hover-opacity"
                />
                <div className="w3-container w3-white">
                  <p>
                    <b>San Francisco</b>
                  </p>
                  <p className="w3-opacity">Sun 29 Nov 2016</p>
                  <p>
                    Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                  </p>
                  <button
                    className="w3-button w3-black w3-margin-bottom"
                    onClick={openModal}
                  >
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ticket Modal */}
        
          <div id="ticketModal" className={`w3-modal ${isModalVisible ? 'w3-show' : ''}`}>
          <div className="w3-modal-content w3-animate-top w3-card-4">
            <header className="w3-container w3-teal w3-center w3-padding-32">
              <span
                onClick={closeModal}
                className="w3-button w3-teal w3-xlarge w3-display-topright"
              >
              </span>
              <h2 className="w3-wide">
                <i className="fa fa-suitcase w3-margin-right" />
                Tickets
              </h2>
            </header>
            <div className="w3-container">
              <p>
                <label>
                  <i className="fa fa-shopping-cart" /> Tickets, $15 per person
                </label>
              </p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="How many?"
              />
              <p>
                <label>
                  <i className="fa fa-user" /> Send To
                </label>
              </p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter email"
              />
              <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
                PAY <i className="fa fa-check" />
              </button>
              <button
                className="w3-button w3-red w3-section"
                onClick={closeModal}
              >
                Close <i className="fa fa-remove" />
              </button>
              <p className="w3-right">
                Need{" "}
                <a href="#" className="w3-text-blue">
                  help?
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* The Contact Section */}
        <div
          className="w3-container w3-content w3-padding-64"
          style={{ maxWidth: 800 }}
          id="contact"
        >
          <h2 className="w3-wide w3-center">CONTACT</h2>
          <p className="w3-opacity w3-center">
            <i>Fan? Drop a note!</i>
          </p>
          <div className="w3-row w3-padding-32">
            <div className="w3-col m6 w3-large w3-margin-bottom">
              <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago,
              US
              <br />
              <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00
              151515
              <br />
              <i className="fa fa-envelope" style={{ width: 30 }}>
                {" "}
              </i>{" "}
              Email: mail@mail.com
              <br />
            </div>
            <div className="w3-col m6">
              <form action="/action_page.php" target="_blank">
                <div
                  className="w3-row-padding"
                  style={{ margin: "0 -16px 8px -16px" }}
                >
                  <div className="w3-half">
                    <input
                      className="w3-input w3-border"
                      type="text"
                      placeholder="Name"
                      required=""
                      name="Name"
                    />
                  </div>
                  <div className="w3-half">
                    <input
                      className="w3-input w3-border"
                      type="text"
                      placeholder="Email"
                      required=""
                      name="Email"
                    />
                  </div>
                </div>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Message"
                  required=""
                  name="Message"
                />
                <button
                  className="w3-button w3-black w3-section w3-right"
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* End Page Content */}
      </div>
    </>
  );
}
export default Page;