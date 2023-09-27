export default function ItemProject({ item }) {
  const { image_thumb_url, title } = item;

  return (
    <button className="item-project">
      <img src={image_thumb_url} />
      <h3>{title}</h3>
    </button>
  );
}
