export default function ModalTechnology({ item }) {
  const { description, title } = item;

  return (
    <div className="modal-technology">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
