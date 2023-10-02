// Project files
import { useState } from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import NavigationBar from "./components/NavigationBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import "./styles/style.css";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
      {/* Modal invisible unless someone sents a React component using setModal() */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
