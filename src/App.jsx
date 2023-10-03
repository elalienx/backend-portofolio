// Node modules
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import "./scripts/fontawesome";
import "./styles/style.css";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Technologies />
      <Contact />

      {/* Modal is not visible unless someone sents a React component using setModal() */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
