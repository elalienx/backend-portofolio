// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemTechnology({ item }) {
  const { icon, title } = item;

  return (
    <article className="item-technology">
      <FontAwesomeIcon className="icon" icon="fa-fff" />
      <h3>{title}</h3>
    </article>
  );
}
