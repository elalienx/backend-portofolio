// Node modules
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
  // Local state
  const [isOpen, setIsOpen] = useState(false);

  // Properties
  const toggleCSS = isOpen ? "show" : "hide";

  return (
    <nav className="navigation-bar">
      <div className="container">
        <div className="main-menu">
          <FontAwesomeIcon className="icon logo" icon={["fas", "rocket"]} />
          <span className="desktop-name">Eduardo Alvarez</span>
          <button onClick={() => setIsOpen(!isOpen)} className="button">
            <FontAwesomeIcon className="icon" icon={["fas", "bars"]} />
          </button>
        </div>

        <div className={`desplegable-menu ${toggleCSS}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
