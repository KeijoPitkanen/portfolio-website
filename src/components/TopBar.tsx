import { useState, type JSX } from "react";
import { BsGithub, BsLinkedin, BsList, BsWordpress } from "react-icons/bs";
import "./Styles/TopBar.css";
import { Image, Offcanvas } from "react-bootstrap";
import TEXT from "../assets/TextContent.json";

/**
 *
 * @returns Top bar with text and menu button
 */
function TopBar(): JSX.Element {
  /////////////////////////////////////////////////////// Variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////////////////////////////////////////////// Main Return
  return (
    <div className="topbar">
      <div className="topbar-text-container">
        <h4 className="topbar-header">{TEXT.topbar.header}</h4>
        <h6 className="topbar-text">{TEXT.topbar.text}</h6>
      </div>
      <BsList size={40} className="topbar-menu" onClick={handleShow} />
      <Offcanvas
        id="offcanvas-custom"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{TEXT.offCanvas.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Image
            className="profile-image"
            fluid
            rounded
            src="./src/assets/profile-picture.jpg"
          />
          <br />
          {TEXT.offCanvas.text}
          <br />
          <br />
          <a
            className="offcanvas-link"
            href="https://www.linkedin.com/in/mikko-pitk%C3%A4nen-7a81422a9/"
          >
            LinkedIn <BsLinkedin />
          </a>
          <br />
          <a className="offcanvas-link" href="https://github.com/KeijoPitkanen">
            Github
          </a>{" "}
          <BsGithub />
          <br />
          <a
            className="offcanvas-link"
            href="https://averagearchprogramming.wordpress.com/?utm_medium=email&utm_campaign=wpcom-happy-moments%2Ffirst-post&utm_source=guides"
          >
            Blog
          </a>{" "}
          <BsWordpress />
        </Offcanvas.Body>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default TopBar;
