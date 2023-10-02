// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemTechnology({ item }) {
  const { icon_style, icon_name, title } = item;

  return (
    <article className="item-technology">
      <FontAwesomeIcon className="icon" icon={[icon_style, icon_name]} />
      <h3>{title}</h3>
    </article>
  );
}
