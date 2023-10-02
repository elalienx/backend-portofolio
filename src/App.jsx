// Node modules
import { useState } from "react";
import FontAwesome from "@fortawesome/react-fontawesome";

// Project files
import Modal from "./components/Modal";
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
      {/* FontAwesome: */}
      {/* icon: [style, name] */}
      <div>
        Rocket icon: @<FontAwesome icon={["solid", "fa-rocket"]} />@
      </div>
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Technologies />

      {/* Modal invisible unless someone sents a React component using setModal() */}
      <Modal state={[modal, setModal]} />
    </div>
  );
}
