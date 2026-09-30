import { useEffect, useRef, useState } from "react";
import image1 from "./image-1.png";
import image15 from "./image-15.png";
import image19 from "./image-19.png";
import image20 from "./image-20.png";
import image222 from "./image-22-2.png";
import image25 from "./image-25.png";

const collectionImages = [
  { src: image15, alt: "Floral collection arrangement" },
  { src: image19, alt: "Pink and purple floral collection arrangement" },
  { src: image222, alt: "Colorful floral collection arrangement" },
  { src: image25, alt: "White and pink floral collection arrangement" },
  { src: image20, alt: "Warm-toned floral collection arrangement" },
  { src: image1, alt: "Mixed floral collection arrangement" },
];

const paginationItems = [0, 1, 2, 3];

export const BestCollectionsSection = (): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const handleScroll = (): void => {
      const pageWidth = carousel.clientWidth;
      const nextPage = Math.min(
        paginationItems.length - 1,
        Math.max(0, Math.round(carousel.scrollLeft / pageWidth)),
      );

      setActivePage(nextPage);
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageChange = (page: number): void => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    setActivePage(page);
    carousel.scrollTo({
      left: page * carousel.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="best-collections-heading"
      className="inline-flex flex-col items-start gap-[82px] absolute top-[5155px] left-[calc(50.00%_-_962px)]"
    >
      <header className="flex relative self-stretch w-full flex-[0_0_auto] flex-col items-center">
        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-4.00px] font-h3 font-[number:var(--h3-font-weight)] text-normal-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Collection
          </h2>
        </div>
        <h1
          id="best-collections-heading"
          className="relative w-fit font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]"
        >
          <span className="text-[#303030] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            Our Best{" "}
          </span>
          <span className="text-[#ff7f7f] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            Collections
          </span>
        </h1>
      </header>
      <div className="inline-flex flex-col items-start gap-9 relative flex-[0_0_auto]">
        <div
          ref={carouselRef}
          aria-label="Best floral collections"
          className="flex w-[1925px] items-start gap-6 relative flex-[0_0_auto] overflow-x-scroll"
          role="region"
        >
          {collectionImages.map((collection) => (
            <img
              key={collection.src}
              className="relative w-[500px] h-[500px] object-cover"
              alt={collection.alt}
              src={collection.src}
            />
          ))}
        </div>
        <nav
          aria-label="Best collections pagination"
          className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]"
        >
          {paginationItems.map((page) => (
            <button
              key={page}
              type="button"
              aria-label={`Go to collection page ${page + 1}`}
              aria-current={activePage === page ? "page" : undefined}
              onClick={() => handlePageChange(page)}
              className={`relative w-9 h-2.5 rounded-[7px] border-0 p-0 ${
                activePage === page ? "bg-primary" : "bg-[#dedede]"
              }`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};