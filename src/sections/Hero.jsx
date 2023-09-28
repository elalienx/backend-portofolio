export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Hi I’m
          <br /> Eduardo
        </h1>
        <p className="subtitle">
          A Java back-end developer with
          <br /> obsessive coding practices!
        </p>
      </div>
      {/* Some tips: */}
      {/* This is one 1 but i want to stylize by showing it in 2 lines use <br/> */}
      {/* h1: Hi, I'm Eduardo frontend developer from Egypt. */}

      {/* If is actually 2 sentences use a span tag with classname subtitle */}
      {/* h1: Eduardo Alvarez. */}
      {/* span.subtitle The best frontend developer in town. */}
    </section>
  );
}
