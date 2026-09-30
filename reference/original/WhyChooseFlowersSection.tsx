import image from "./image.svg";
import image18 from "./image-18.png";
import vector from "./vector.svg";
import vector2 from "./vector-2.svg";

type ProductCard = {
  title: string;
  description: string;
  position: string;
  background: string;
  titleColor: string;
  descriptionColor: string;
};

const productCards: ProductCard[] = [
  {
    title: "Lifetime Use",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
    position: "top-[405px] left-[258px]",
    background: "bg-[#ffe1d1]",
    titleColor: "text-dark",
    descriptionColor: "text-normal-dark",
  },
  {
    title: "Best Quality",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
    position: "top-[1063px] left-[258px]",
    background: "bg-[#ffefcf]",
    titleColor: "text-dark",
    descriptionColor: "text-normal-dark",
  },
  {
    title: "Eco-friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
    position: "top-[734px] left-[145px]",
    background: "bg-primary",
    titleColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    title: "Comical Free",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
    position: "top-[734px] left-[1366px]",
    background: "bg-primary",
    titleColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    title: "Customization",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
    position: "top-[405px] left-[1242px]",
    background: "bg-[#ffefcf]",
    titleColor: "text-dark",
    descriptionColor: "text-normal-dark",
  },
  {
    title: "Wall hanging flower/ bouquet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.",
    position: "top-[1063px] left-[1242px]",
    background: "bg-[#ffe1d1]",
    titleColor: "text-dark",
    descriptionColor: "text-normal-dark",
  },
];

const decorativeVectors = [
  {
    source: vector,
    position: "top-[614px] left-[1277px]",
  },
  {
    source: image,
    position: "top-[727px] left-[563px]",
  },
  {
    source: vector2,
    position: "top-[1151px] left-[960px]",
  },
];

export const WhyChooseFlowersSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="why-choose-flowers-title"
      className="absolute top-[3673px] left-0 w-[1920px] h-[1351px] bg-[linear-gradient(180deg,rgba(255,255,255,0.33)_0%,rgba(255,223,206,0.15)_100%)]"
    >
      <header className="inline-flex absolute top-[100px] left-[calc(50.00%_-_386px)] flex-col items-center">
        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0 relative flex-[0_0_auto]">
          <div className="mt-[-4.00px] text-normal-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] relative w-fit font-h3 font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            PRODUCTS
          </div>
        </div>
        <h2
          id="why-choose-flowers-title"
          className="relative w-fit font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]"
        >
          <span className="text-[#303030] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            Why choose{" "}
          </span>
          <span className="text-[#ff7f7f] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            Our Flowers
          </span>
        </h2>
      </header>
      <img
        className="absolute top-[388px] left-[calc(50.00%_-_281px)] w-[562px] h-[846px] object-cover"
        alt="Decorative bouquet of flowers"
        src={image18}
      />
      {productCards.map((card) => (
        <article
          key={card.title}
          className={`flex flex-col w-[409px] items-start justify-end gap-3 px-[42px] py-6 absolute ${card.position} ${card.background} rounded-3xl`}
        >
          <h3
            className={`relative self-stretch mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] ${card.titleColor} text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]`}
          >
            {card.title}
          </h3>
          <p
            className={`self-stretch ${card.descriptionColor} text-[length:var(--description-font-size)] relative font-description font-[number:var(--description-font-weight)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]`}
          >
            {card.description}
          </p>
        </article>
      ))}

      {decorativeVectors.map((decorativeVector) => (
        <div
          key={decorativeVector.position}
          aria-hidden="true"
          className={`absolute ${decorativeVector.position} w-[62px] h-[62px] flex`}
        >
          <img
            className="flex-1 w-[38.77px]"
            alt=""
            src={decorativeVector.source}
          />
        </div>
      ))}
    </section>
  );
};
