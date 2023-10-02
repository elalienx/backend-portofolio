export default function ItemTechnology({ item }) {
  const { title } = item;

  return (
    <article className="item-technology">
      <h3>{title}</h3>
    </article>
  );
}
