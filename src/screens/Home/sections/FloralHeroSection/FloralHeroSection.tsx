import { useRef } from "react";
import { useHeroParallax } from "../../../../motion/pageMotion";
import heroBouquet from "../../../../assets/design/image-13.png";

export function FloralHeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  useHeroParallax(imageRef);
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__copy">
        <span className="hero__eyebrow">ARTIFICIAL FLOWER</span>
        <h1 id="hero-title">
          <span className="hero__line"><span>Unique Flowers</span></span>{" "}
          <span className="hero__line"><span><em>delivered</em></span></span>{" "}
          <span className="hero__line"><span>to your doorstep</span></span>
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
        <div className="hero__image-motion" ref={imageRef}>
          <img
            src={heroBouquet}
            alt="Pink, peach and cream floral arrangement"
            fetchPriority="high"
          />
        </div>
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
