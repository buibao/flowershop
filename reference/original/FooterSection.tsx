import frame3 from "./frame-3.svg";
import image27 from "./image-27.png";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";

const navigationLinks = ["Home", "Product", "Pages", "Blog", "Contact"];

const productLinks = [
  "Winter Collection",
  "Summer Collection",
  "Special Discount",
  "Top rated Products",
];

const paymentMethods = ["Credit card", "Debit card", "Bank Transfer", "Paypal"];

const linkClassName =
  "relative w-fit font-h4 font-[number:var(--h4-font-weight)] text-normal-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-[1640px] items-start justify-between absolute top-[6931px] left-[calc(50.00%_-_820px)]">
      <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
        <a
          href="/"
          aria-label="Flowers home"
          className="inline-flex items-center gap-[9px] px-2.5 py-0 relative flex-[0_0_auto]"
        >
          <span className="relative w-11 h-11" aria-hidden="true">
            <img
              className="absolute w-[58.40%] h-[58.40%] top-[41.60%] left-[41.60%]"
              alt=""
              src={vector7}
            />
            <img
              className="absolute w-[96.88%] h-[96.87%] top-[3.13%] left-[3.12%]"
              alt=""
              src={vector8}
            />
          </span>
          <span className="w-fit text-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] relative mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Flowers
          </span>
        </a>
        <p className="w-[528px] text-normal-dark text-[length:var(--paragraph-font-size)] relative font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
          Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus
          diam mauris dolor tellus diam mauris dolor at dui.
        </p>
        <img
          className="relative flex-[0_0_auto]"
          alt="Social media links"
          src={frame3}
        />
      </div>
      <nav
        aria-label="Main navigation"
        className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
      >
        <a
          href="/"
          className="mt-[-1.00px] text-dark relative w-fit font-h4 font-[number:var(--h4-font-weight)] text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]"
        >
          Home
        </a>
        {navigationLinks.slice(1).map((link) => (
          <a
            href={`/${link.toLowerCase()}`}
            className={linkClassName}
            key={link}
          >
            {link}
          </a>
        ))}
      </nav>
      <nav
        aria-label="Product navigation"
        className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
      >
        <div className="mt-[-1.00px] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] relative w-fit font-h4 font-[number:var(--h4-font-weight)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
          Products
        </div>
        {productLinks.map((link) => (
          <a
            href={`/products/${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={linkClassName}
            key={link}
          >
            {link}
          </a>
        ))}
      </nav>
      <nav
        aria-label="Payment methods"
        className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
      >
        <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
          Payment Method
        </div>
        {paymentMethods.map((method) => (
          <a
            href={`/payment/${method.toLowerCase().replace(/\s+/g, "-")}`}
            className={linkClassName}
            key={method}
          >
            {method}
          </a>
        ))}
      </nav>
      <div className="inline-flex flex-col items-start gap-[19px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
          Get Online
        </div>
        <img
          className="relative w-[219px] h-[166px] object-cover"
          alt="Online shopping payment options"
          src={image27}
        />
      </div>
    </footer>
  );
};
