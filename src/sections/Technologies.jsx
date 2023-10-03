// Project files
import Item from "../components/ItemTechnology";
import Data from "../data/technologies.json";

export default function Technologies({ setModal }) {
  // Components
  const Items = Data.map((item) => (
    <Item key={item.id} item={item} setModal={setModal} />
  ));

  return (
    <section id="technologies">
      <div className="container">
        <h2>Technologies</h2>
        <div className="content">
          <p>
            Here are the technologies that I already know, and also the ones I'm
            learning.
          </p>
          <div className="items">{Items}</div>
        </div>
      </div>
    </section>
  );
}
