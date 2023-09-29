// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon
            className="icon"
            icon={icon({ name: "rocket", style: "solid" })}
          />
          <span className="name">Eduardo Alvarez</span>
        </div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
