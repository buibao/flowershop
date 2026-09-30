import image13 from "./image-13.png";

export const FloralHeroSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="floral-hero-title"
      className="flex w-[1640px] items-center justify-between absolute top-60 left-[calc(50.00%_-_820px)]"
    >
      <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] border-l-4 [border-left-style:solid] border-primary">
          <span className="relative w-fit mt-[-4.00px] font-h3 font-[number:var(--h3-font-weight)] text-normal-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            ARTIFICIAL FLOWER
          </span>
        </div>
        <h1
          id="floral-hero-title"
          className="relative w-[784px] [font-family:'Jost-Regular',Helvetica] font-normal text-transparent text-7xl tracking-[0] leading-[95px]"
        >
          <span className="text-[#303030]">Unique Flowers </span>
          <span className="text-[#ff7f7f]">delivered</span>
          <span className="text-[#303030]"> to your doorstep</span>
        </h1>
        <p className="w-[763px] text-normal-dark text-[length:var(--paragraph-font-size)] relative font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
          Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus
          diam mauris dolor at dui.
        </p>
        <button
          type="button"
          className="inline-flex items-start gap-2.5 px-8 py-2.5 relative flex-[0_0_auto] bg-[#ffa3a3] rounded-md"
        >
          <span className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
            Shop Now
          </span>
        </button>
      </div>
      <img
        className="relative w-[807px] h-[807px] object-cover"
        src={image13}
        alt="Bouquet of artificial flowers"
      />
    </section>
  );
};
