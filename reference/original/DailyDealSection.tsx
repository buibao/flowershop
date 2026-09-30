import { useState } from "react";
import image8 from "./image-8.png";
import image9 from "./image-9.png";
import image92 from "./image-9-2.png";
import image16 from "./image-16.png";
import vector3 from "./vector-3.svg";

type Deal = {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
  imageAlt: string;
  imageClassName: string;
  cardClassName: string;
  accentClassName: string;
  secondaryAccentClassName: string;
};

const countdownItems = [
  { value: "24", label: "Days" },
  { value: "36", label: "Hours" },
  { value: "12", label: "Mins" },
  { value: "55", label: "Secs" },
];

const deals: Deal[] = [
  {
    id: 1,
    title: "Wall hanging flower/ bouquet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
    price: "$24.00",
    originalPrice: "$24.00",
    image: image8,
    imageAlt: "Wall hanging flower bouquet",
    imageClassName:
      "absolute top-0 left-[206px] w-[285px] h-[285px] object-cover",
    cardClassName: "relative w-[491px] h-[514px]",
    accentClassName:
      "absolute top-[-49px] left-[321px] w-[206px] h-[206px] bg-[#ffe497] rounded-[103px] blur-[33.3px]",
    secondaryAccentClassName:
      "absolute -top-7 left-[226px] w-[165px] h-[165px] bg-[#ffd1d4] rounded-[82.5px] blur-[33.3px]",
  },
  {
    id: 2,
    title: "Wall hanging flower/ bouquet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
    price: "$24.00",
    originalPrice: "$24.00",
    image: image9,
    imageAlt: "Wall hanging flower bouquet",
    imageClassName:
      "absolute top-0 left-[204px] w-[285px] h-[285px] object-cover",
    cardClassName: "relative w-[491px] h-[519px]",
    accentClassName:
      "absolute top-[-7px] left-[355px] w-[156px] h-[151px] bg-[#ffdcc8] rounded-[78px/75.5px] blur-[33.3px]",
    secondaryAccentClassName:
      "absolute top-[-55px] left-[214px] w-[165px] h-[165px] bg-[#ffd7a1] rounded-[82.5px] blur-[33.3px]",
  },
  {
    id: 3,
    title: "Wall hanging flower/ bouquet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris dolor at dui.",
    price: "$24.00",
    originalPrice: "$24.00",
    image: image16,
    imageAlt: "Wall hanging flower bouquet",
    imageClassName: "absolute top-0 left-[187px] w-[323px] h-[294px]",
    cardClassName: "relative w-[509.76px] h-[519px]",
    accentClassName:
      "absolute top-[-49px] left-[321px] w-[206px] h-[206px] bg-[#ffe497] rounded-[103px] blur-[33.3px]",
    secondaryAccentClassName:
      "absolute -top-9 left-[226px] w-[181px] h-[181px] bg-[#d2d1ff] rounded-[90.5px] blur-[33.3px]",
  },
];

const DealCard = ({ deal }: { deal: Deal }) => {
  const [added, setAdded] = useState(false);

  return (
    <article className={deal.cardClassName}>
      <div className="top-[161px] left-0 w-[491px] h-[353px] bg-[#ffffffd9] overflow-hidden absolute rounded-3xl">
        <div className={deal.accentClassName} />
        <div className={deal.secondaryAccentClassName} />
        <div className="flex flex-col w-[491px] items-start justify-end gap-[18px] px-[52px] py-6 absolute top-[90px] left-px rounded-3xl">
          <h3 className="self-stretch text-[#303030] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] relative mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
            Wall hanging <span className="text-[#ff7f7f]">flower/ bouquet</span>
          </h3>
          <p className="relative self-stretch font-description font-[number:var(--description-font-weight)] text-[#b0b0b0] text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
            {deal.description}
          </p>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <p className="flex-1 [font-family:'Jost-Medium',Helvetica] text-transparent relative font-normal text-2xl tracking-[0] leading-[normal]">
              <span className="font-medium text-[#ff7f7f]">{deal.price}</span>
              <span className="font-h4 text-[#303030] [font-style:var(--h4-font-style)] font-[number:var(--h4-font-weight)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] text-[length:var(--h4-font-size)]">
                &nbsp;
              </span>
              <span className="[font-family:'Poppins-Regular',Helvetica] text-[#797777] text-xl line-through">
                {deal.originalPrice}
              </span>
            </p>
            <button
              type="button"
              aria-label={`${added ? "Added" : "Add"} ${deal.title} to cart`}
              aria-pressed={added}
              onClick={() => setAdded((current) => !current)}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 relative flex-[0_0_auto] bg-primary-dark rounded-[10px] cursor-pointer"
            >
              <span className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-[#ffffff] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                {added ? "Added" : "Add to Cart"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <img
        className={deal.imageClassName}
        alt={deal.imageAlt}
        src={deal.image}
      />
      {deal.id === 1 && (
        <img
          className="absolute top-0 left-[202px] w-[285px] h-[285px] object-cover"
          alt="Wall hanging flower bouquet detail"
          src={image92}
        />
      )}
    </article>
  );
};

export const DailyDealSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="daily-deal-heading"
      className="inline-flex flex-col h-[884px] items-center justify-between absolute top-[2647px] left-[calc(50.00%_-_806px)]"
    >
      <div className="inline-flex flex-col items-center gap-[42px] relative flex-[0_0_auto]">
        <header className="inline-flex flex-col items-center relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-4.00px] font-h3 font-[number:var(--h3-font-weight)] text-normal-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              OFFERS
            </p>
          </div>
          <h2
            id="daily-deal-heading"
            className="relative w-fit font-h1 font-[number:var(--h1-font-weight)] text-dark text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]"
          >
            Deal of the day
          </h2>
        </header>
        <div
          className="inline-flex items-start gap-6 relative flex-[0_0_auto]"
          aria-label="Deal countdown"
        >
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="inline-flex flex-col items-center px-[39px] py-3 relative flex-[0_0_auto] bg-primary rounded-xl border-2 border-solid border-[#ffffff]"
            >
              <span className="relative w-fit mt-[-2.00px] [font-family:'Jost-Medium',Helvetica] font-medium text-4xl text-center tracking-[2.88px] leading-[normal] text-[#ffffff]">
                {item.value}
              </span>
              <span className="relative w-fit font-h4 font-[number:var(--h4-font-weight)] text-[#ffffff] text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div
          className="absolute top-[104px] left-[548px] w-[62px] h-[62px]"
          aria-hidden="true"
        >
          <img
            className="absolute w-[81.27%] h-[81.27%] top-[18.73%] left-[18.73%]"
            alt=""
            src={vector3}
          />
        </div>
      </div>
      <div className="inline-flex items-end gap-[60px] relative flex-[0_0_auto]">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
};
