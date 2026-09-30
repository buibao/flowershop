import image2 from "./image-2.png";
import image11 from "./image-11.png";
import image22 from "./image-22.png";
import vector20 from "./vector-20.svg";
import vector21 from "./vector-21.svg";
import vector22 from "./vector-22.svg";

const products = [
  {
    image: image22,
    ratingIcon: vector20,
    imageClassName: "relative w-[443px] h-[443px] object-cover",
    decorationClassName:
      "absolute top-[calc(50.00%_-_80px)] left-[calc(50.00%_-_140px)] w-[239px] h-[239px] bg-[#ffcfcf91] rounded-[110px_110px_0px_110px]",
    name: "Combo Bouquet 01",
    price: "$40.00",
    rating: "5.0",
  },
  {
    image: image2,
    ratingIcon: vector21,
    imageClassName: "relative w-[614px] h-[572px]",
    decorationClassName:
      "left-[calc(50.00%_-_168px)] w-[294px] h-[294px] rounded-[135.31px_135.31px_0px_135.31px] absolute top-[calc(50.00%_-_74px)] bg-[#ffcfcf91]",
    name: "Combo Bouquet 01",
    price: "$40.00",
    rating: "5.0",
  },
  {
    image: image11,
    ratingIcon: vector22,
    imageClassName: "relative w-[443px] h-[443px] object-cover",
    decorationClassName:
      "left-[calc(50.00%_-_140px)] w-[239px] h-[239px] rounded-[110px_110px_0px_110px] absolute top-[calc(50.00%_-_74px)] bg-[#ffcfcf91]",
    name: "Combo Bouquet 01",
    price: "$40.00",
    rating: "5.0",
  },
];

export const TopSellingProductsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="top-selling-products-title"
      className="inline-flex flex-col items-center gap-[72px] absolute top-[1464px] left-[calc(50.00%_-_820px)]"
    >
      <header className="inline-flex flex-col items-center relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0 relative flex-[0_0_auto]">
          <h3 className="mt-[-4.00px] text-normal-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] relative w-fit font-h3 font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            PRODUCTS
          </h3>
        </div>
        <h2
          id="top-selling-products-title"
          className="relative w-fit font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]"
        >
          <span className="text-[#303030] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            This month&apos;s top selling{" "}
          </span>
          <span className="text-[#ff7f7f] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            Product
          </span>
        </h2>
      </header>
      <div className="flex w-[1640px] items-end justify-between relative flex-[0_0_auto]">
        {products.map((product) => (
          <article
            key={`${product.name}-${product.image}`}
            className="inline-flex flex-col items-center justify-center gap-6 relative flex-[0_0_auto]"
          >
            <div aria-hidden="true" className={product.decorationClassName} />
            <img
              className={product.imageClassName}
              alt={`${product.name} bouquet`}
              src={product.image}
            />
            <div className="flex-col gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Jost-Regular',Helvetica] font-normal text-dark text-4xl tracking-[0.72px] leading-[normal]">
                {product.name}
              </h3>
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  {product.price}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
                  aria-label={`Rated ${product.rating} out of 5`}
                >
                  <div className="relative w-[30px] h-[30px]">
                    <img
                      className="absolute w-[85.65%] h-[85.11%] top-[14.89%] left-[14.35%]"
                      alt=""
                      aria-hidden="true"
                      src={product.ratingIcon}
                    />
                  </div>
                  <span className="w-fit mt-[-1.00px] font-h4 text-dark relative font-[number:var(--h4-font-weight)] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                    {product.rating}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
