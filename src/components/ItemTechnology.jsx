// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ItemTechnology({ item }) {
  const { icon_name, icon_style, title } = item;

  return (
    <article className="item-technology">
      <FontAwesomeIcon
        className="icon"
        icon={icon({ name: "java", style: "brands" })}
      />
      <h3>{title}</h3>
    </article>
  );
}
