// Project files
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
