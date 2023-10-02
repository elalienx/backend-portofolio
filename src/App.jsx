// Project files
import { useState } from "react";
import Modal from "./components/Modal";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import "./styles/style.css";

export default function App() {
  // Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Hero />
      <About />
      <Projects setModal={setModal} />
      {/* Modal invisible unless someone sents a React component using setModal() */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
