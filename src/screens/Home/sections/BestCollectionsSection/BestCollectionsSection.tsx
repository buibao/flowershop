import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { collections } from "../../../../data/catalog";

export function BestCollectionsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(collections.length - 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updatePages = () => {
      const card = track.querySelector<HTMLElement>(".collection-card");
      if (!card) return;
      const visible = Math.max(
        1,
        Math.round((track.clientWidth + 18) / (card.offsetWidth + 18)),
      );
      const nextMax = Math.max(0, collections.length - visible);
      setMaxIndex(nextMax);
      setActive((current) => Math.min(current, nextMax));
    };
    const observer = new ResizeObserver(updatePages);
    observer.observe(track);
    updatePages();
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".collection-card");
    if (!track || !card) return;
    const next = Math.max(0, Math.min(maxIndex, index));
    track.scrollTo({
      left: next * (card.offsetWidth + 18),
      behavior: "smooth",
    });
    setActive(next);
  };
  const updateActive = () => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".collection-card");
    if (track && card)
      setActive(
        Math.min(
          maxIndex,
          Math.round(track.scrollLeft / (card.offsetWidth + 18)),
        ),
      );
  };

  return (
    <section
      id="collections"
      className="collections section-pad"
      aria-labelledby="collections-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Collection</span>
          <h2 id="collections-heading">
            Our Best <em>Collections</em>
          </h2>
        </div>
        <div className="collections__viewport">
          <div
            className="collections__track"
            ref={trackRef}
            onScroll={updateActive}
            aria-label="Flower collections"
          >
            {collections.map((collection) => (
              <div className="collection-card" key={collection.alt}>
                <img src={collection.image} alt={collection.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="collections__controls">
          <button
            type="button"
            aria-label="Previous collection"
            onClick={() => scrollTo(active - 1)}
          >
            <ArrowLeft size={18} />
          </button>
          <div
            className="collections__dots"
            aria-label={`Collection position ${active + 1} of ${maxIndex + 1}`}
          >
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to collection ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                className={active === index ? "is-active" : ""}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next collection"
            onClick={() => scrollTo(active + 1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
