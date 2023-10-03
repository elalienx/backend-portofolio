// Node modules
import { faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavigationBar() {
  // Local state
  const [showLinks, setShowLinks] = useState(false);

  // Properties
  const cssToggle = showLinks ? "show" : "hide";

  return (
    <nav className="navigation-bar">
      {/* Main menu 🔴 */}
      <div className="main-menu">
        <FontAwesomeIcon className="logo icon" icon={["fas", "fa-rocket"]} />
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="menu-button"
        >
          <FontAwesomeIcon className="icon" icon={["fas", "fa-bars"]} />
        </button>
        <span className="name">Eduardo Alvarez</span>
      </div>

      {/* Links 🟢 */}
      <div className={`links ${cssToggle}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#technologies">Technologies</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}