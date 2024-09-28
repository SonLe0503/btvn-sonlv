
import p1 from "../../assets/images/p1.jpg"
import p2 from "../../assets/images/p2.jpg"
import p3 from "../../assets/images/p3.jpg"
import p4 from "../../assets/images/p4.jpg"
import p5 from "../../assets/images/p5.jpg"
import p6 from "../../assets/images/p6.jpg"
import p7 from "../../assets/images/p7.jpg"
import p8 from "../../assets/images/p8.jpg"
import {useState} from 'react'

function Second() {
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState('');

  const openModal = (src, alt) => {
    setModalImage(src);
    setModalCaption(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalCaption('');
  };
  return (
    <>
      {/* Second Parallax Image with Portfolio Text */}
      <div className="bgimg-2 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
      </div>
      {/* Container (Portfolio Section) */}
      <div className="w3-content w3-container w3-padding-64" id="portfolio">
        <h3 className="w3-center">MY WORK</h3>
        <p className="w3-center">
          <em>
            Here are some of my latest lorem work ipsum tipsum.
            <br /> Click on the images to make them bigger
          </em>
        </p>
        <br />
        {/* Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) */}
        <div className="w3-row-padding w3-center">
          <div className="w3-col m3">
            <img
              src={p1}
              style={{ width: "100%" }}
              onClick={() => openModal(p1, "The mist over the mountains")}
              className="w3-hover-opacity"
              alt="The mist over the mountains"
            />
          </div>
          <div className="w3-col m3">
            <img
              src={p2}
              style={{ width: "100%" }}
              onClick={() => openModal(p2, "Coffee beans")}
              className="w3-hover-opacity"
              alt="Coffee beans"
            />
          </div>
          <div className="w3-col m3">
            <img
              src={p3}
              style={{ width: "100%" }}
              onClick={() => openModal(p3, "Bear closeup")}
              className="w3-hover-opacity"
              alt="Bear closeup"
            />
          </div>
          <div className="w3-col m3">
            <img
              src={p4}
              style={{ width: "100%" }}
              onClick={() => openModal(p4, "Quiet ocean")}
              className="w3-hover-opacity"
              alt="Quiet ocean"
            />
          </div>
        </div>
        <div className="w3-row-padding w3-center w3-section">
          <div className="w3-col m3">
            <img
              src={p5}
              style={{ width: "100%" }}
              onClick={() => openModal(p5,"The mist")}
              className="w3-hover-opacity"
              alt="The mist"
            />
          </div>
          <div className="w3-col m3">
            <img
              src={p6}
              style={{ width: "100%" }}
              onClick={() => openModal(p6,"My beloved typewriter")}
              className="w3-hover-opacity"
              alt="My beloved typewriter"
            />
          </div>
          <div className="w3-col m3">
            <img
              src={p7}
              style={{ width: "100%" }}
              onClick={() => openModal(p7,"Empty ghost train")}
              className="w3-hover-opacity"
              alt="Empty ghost train"
            />
          </div>
          <div className="w3-col m3">
            <img
              src={p8}
              style={{ width: "100%" }}
              onClick={() => openModal(p8,"Sailing")}
              className="w3-hover-opacity"
              alt="Sailing"
            />
          </div>
          <button
            className="w3-button w3-padding-large w3-light-grey"
            style={{ marginTop: 64 }}
          >
            LOAD MORE
          </button>
        </div>
      </div>
      {/* Modal for full size images on click*/}
      <div
        id="modal01"
        className="w3-modal w3-black"
        onClick={closeModal}
      >
        <span
          className="w3-button w3-large w3-black w3-display-topright"
          title="Close Modal Image"
          onClick={closeModal}
        >
          <i className="fa fa-remove" />
        </span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" className="w3-image"  src={modalImage}  alt={modalCaption}/>
          <p id="caption" className="w3-opacity w3-large">{modalCaption}</p>
        </div>
      </div>
    </>
  );
}
export default Second;
