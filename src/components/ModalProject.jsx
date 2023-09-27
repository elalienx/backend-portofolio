export default function ModalProject({ item }) {
  const {
    image_screenshot_url,
    title,
    description,
    technologies,
    link_github,
    link_website,
  } = item;

  return (
    <div className="modal-project">
      <img src={image_screenshot_url} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* technologies list pending */}
        <a className="button" href={link_website}>
          Open website
        </a>
        <a className="button primary" href={link_github}>
          View repository
        </a>
      </div>
    </div>
  );
}
