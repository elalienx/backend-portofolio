// Node modules
import { createPortal } from "react-dom";

export default function Modal({ state }) {
  const [modal, setModal] = state;

  // safeguard
  if (modal === null) return;

  // Properties
  const HTMLElement = document.getElementById("portal");

  return createPortal(
    <div id="modal">
      <div className="background" onClick={() => setModal(null)}>
        {/* This is the black background that is clickable to close the modal */}
      </div>

      {/* The React component you pass as a prop will be rendered here on top of the background */}
      {modal}
    </div>,
    HTMLElement
  );
}
