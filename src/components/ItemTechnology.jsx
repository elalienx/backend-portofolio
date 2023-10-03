// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project file
import ModalTechnology from "../components/ModalTechnology";

export default function ItemTechnology({ item, setModal }) {
  const { icon_style, icon_name, title } = item;

  return (
    <article
      onClick={() => setModal(<ModalTechnology item={item} />)}
      className="item-technology"
    >
      <FontAwesomeIcon className="icon" icon={[icon_style, icon_name]} />
      <h3>{title}</h3>
    </article>
  );
}
