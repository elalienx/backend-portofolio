// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemContact({ item }) {
  const { title, icon_name, icon_style, url } = item;

  return (
    <a className="item-contact" href={url} target="_blank">
      <FontAwesomeIcon className="icon" icon={[icon_style, icon_name]} />
      {title}
    </a>
  );
}
