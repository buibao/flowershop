import heroBouquet from "../../../../assets/design/image-13.png";

export function FloralHeroSection() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__copy">
        <span className="hero__eyebrow">ARTIFICIAL FLOWER</span>
        <h1 id="hero-title">
          Unique Flowers <em>delivered</em> to your doorstep
        </h1>
        <p>
          Beautiful flowers for the everyday moments and the ones you will
          always remember.
        </p>
        <a href="#products" className="button button--primary">
          Shop Now
        </a>
      </div>
      <div className="hero__visual">
        <span className="hero__halo" aria-hidden="true" />
        <img
          src={heroBouquet}
          alt="Pink, peach and cream floral arrangement"
          fetchPriority="high"
        />
        <span className="sparkle hero__sparkle-one" aria-hidden="true">
          ✦
        </span>
        <span className="sparkle hero__sparkle-two" aria-hidden="true">
          ✦
        </span>
      </div>
    </section>
  );
}
