// Project files
import Data from "../data/projects.json";
import ItemProject from "../components/ItemProject";

export default function Projects({ setModal }) {
  // Components
  const Items = Data.map((item) => (
    <ItemProject key={item.id} item={item} setModal={setModal} />
  ));

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid-content">
          <p>
            Here are the projects I will be making during the frontend course at
            Novare potential.
          </p>
          <div className="grid-items">{Items}</div>
        </div>
      </div>
    </section>
  );
}
