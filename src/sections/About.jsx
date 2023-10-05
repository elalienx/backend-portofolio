export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <div className="content">
          <div className="paragraphs">
            <p>
              Hi! My name is Eduardo and I’m a back-end developer from Ecuador.I
              moved to Sweden recently to study my masters in Media Management.
              This website showcases my projects and skills I have developed so
              far!
            </p>
            <p>
              Please take a look at my page and have a good time. I hope to hear
              from you soon.
            </p>
            {/* Button test */}
            <button className="primary">primary button</button>
            <br />
            <button>secondary button</button>
            <br />
            <a href="#" className="button">
              themed a as button
            </a>
            <br />
            <button className="reset-button">unthemed button</button>
          </div>
          <img src="images/about.png" alt="A blue computer with decoration" />
        </div>
      </div>
    </section>
  );
}
