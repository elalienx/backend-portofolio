// Node modules
import { useState } from "react";

// Project files
import Modal from "./components/Modal";
import NavigationBar from "./components/NavigationBar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import "./styles/style.css";
import "./scripts/fontawesome";

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

      {/* Modal is invisible unless someone sents a React component using setModal() */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
