// Project files
import ItemContact from "../components/ItemContact";
import Data from "../data/contact.json";

export default function Contact() {
  // Components
  const Items = Data.map((item) => <ItemContact key={item.id} item={item} />);

  return (
    <section id="contact">
      <div className="container">
        <div className="content">
          <h2>Contact</h2>
          <p>
            Here are my contact information if you are interested in starting a
            collaboration.
          </p>
          {Items}
        </div>
      </div>
    </section>
  );
}
