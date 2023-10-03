// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      {/* Main menu 🔴 */}
      <div className="main-menu">
        <FontAwesomeIcon className="logo icon" icon={["fas", "fa-rocket"]} />
        <button className="menu-button">
          <FontAwesomeIcon className="icon" icon={["fas", "fa-bars"]} />
        </button>
        <span className="name">Eduardo Alvarez</span>
      </div>

      {/* Links 🟢 */}
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#technologies">Technologies</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
