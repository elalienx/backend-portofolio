// Project files
import Data from "../data/projects.json";

export default function Projects() {
  // Components
  const Items = Data.map((item) => (
    <article key={item.id}>
      <img src={item.image_thumb_url} />
      <h3>{item.title}</h3>
    </article>
  ));

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="content">
          <p>
            Here are the projects I will be making during the frontend course at
            Novare potential.
          </p>
          <div className="grid">{Items}</div>
        </div>
      </div>
    </section>
  );
}
