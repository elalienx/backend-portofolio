// Project files
import ModalProject from "./ModalProject";

export default function ItemProject({ item, setModal }) {
  const { image_thumb_url, title } = item;

  // Components
  const Modal = <ModalProject item={item} />;

  return (
    <article onClick={() => setModal(Modal)} className="item-project">
      <img src={image_thumb_url} />
      <h3>{title}</h3>
    </article>
  );
}
