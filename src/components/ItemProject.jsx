export default function ItemProject({ item }) {
  return (
    <article className="item-project">
      <img src={item.image_thumb_url} />
      <h3>{item.title}</h3>
    </article>
  );
}
