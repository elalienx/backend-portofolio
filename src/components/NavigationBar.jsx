export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      {/* Main menu 🔴 */}
      <div className="main-menu"></div>
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
