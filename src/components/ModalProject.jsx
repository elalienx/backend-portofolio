export default function ModalProject({ item }) {
  const { image_url, title, description, link_github, link_website } = item;

  return (
    <div className="modal-project">
      <img src={image_url} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="button primary" href={link_github}>
          View repository
        </a>
        <a className="button" href={link_website}>
          Open website
        </a>
      </div>
    </div>
  );
}
