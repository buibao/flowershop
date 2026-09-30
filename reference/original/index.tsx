import { BestCollectionsSection } from "./BestCollectionsSection";
import { ClientTestimonialsSection } from "./ClientTestimonialsSection";
import { DailyDealSection } from "./DailyDealSection";
import { FloralHeroSection } from "./FloralHeroSection";
import { FooterSection } from "./FooterSection";
import frame32 from "./frame-3-2.svg";
import image from "./image.png";
import line3 from "./line-3.svg";
import maskGroup from "./mask-group.png";
import maskGroup2 from "./mask-group-2.png";
import maskGroup3 from "./mask-group-3.png";
import { ServiceBenefitsSection } from "./ServiceBenefitsSection";
import { TopSellingProductsSection } from "./TopSellingProductsSection";
import vector4 from "./vector-4.svg";
import vector9 from "./vector-9.svg";
import vector15 from "./vector-15.svg";
import vector16 from "./vector-16.svg";
import vector17 from "./vector-17.svg";
import vector18 from "./vector-18.svg";
import vector19 from "./vector-19.svg";
import vector23 from "./vector-23.svg";
import vector24 from "./vector-24.svg";
import vector25 from "./vector-25.svg";
import { WhyChooseFlowersSection } from "./WhyChooseFlowersSection";

const navigationItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Product", href: "#products", active: false },
  { label: "Pages", href: "#collections", active: false },
  { label: "Blog", href: "#testimonials", active: false },
  { label: "Contact", href: "#contact", active: false },
];

const decorativeVectors = [
  {
    src: vector25,
    alt: "",
    className: "absolute top-[993px] left-[1481px] w-[62px] h-[62px] flex",
    imageClassName: "flex-1 w-[38.77px]",
  },
  {
    src: vector19,
    alt: "",
    className: "absolute top-[1595px] left-[1481px] w-[62px] h-[62px] flex",
    imageClassName: "flex-1 w-[38.77px]",
  },
  {
    src: vector15,
    alt: "",
    className: "absolute top-[1055px] left-[1599px] w-9 h-[38px] flex",
    imageClassName: "flex-1 w-[22.93px]",
  },
  {
    src: vector18,
    alt: "",
    className: "absolute top-[1477px] left-[461px] w-9 h-[38px] flex",
    imageClassName: "flex-1 w-[22.93px]",
  },
  {
    src: vector16,
    alt: "",
    className: "absolute top-[329px] left-[150px] w-9 h-[38px] flex",
    imageClassName: "flex-1 w-[22.93px]",
  },
  {
    src: vector17,
    alt: "",
    className: "absolute top-[391px] left-[1718px] w-9 h-[38px] flex",
    imageClassName: "flex-1 w-[22.93px]",
  },
  {
    src: vector4,
    alt: "",
    className: "absolute top-[3506px] left-[619px] w-[62px] h-[62px] flex",
    imageClassName: "flex-1 w-[38.77px]",
  },
];

const decorativeOrbit = (
  className: string,
  firstClassName: string,
  secondClassName: string,
) => (
  <div className={className} aria-hidden="true">
    <div className={firstClassName} />
    <div className={secondClassName} />
  </div>
);

export const Home = (): JSX.Element => {
  return (
    <div
      id="home"
      className="bg-[#fff8f2] overflow-hidden w-full min-w-[1920px] min-h-[7492px] relative"
    >
      <div
        className="absolute top-[4808px] left-[-484px] w-[1097px] h-[1097px] bg-[#ffd3d359] rounded-[548.5px] blur-[200px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[5553px] left-[1184px] w-[1097px] h-[1097px] bg-[#ffd3d359] rounded-[548.5px] blur-[200px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2537px] left-0 w-[1920px] h-[1136px] bg-[linear-gradient(261deg,rgba(255,164,164,0.05)_0%,rgba(255,248,242,0.1)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1074px] left-[371px] w-64 h-[223px] bg-primary-dark rounded-[128px/111.5px] opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1155px] left-[1331px] w-[268px] h-[223px] bg-primary-dark rounded-[134px/111.5px] opacity-[0.12]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1100px] left-[445px] w-[184px] h-[184px] bg-primary rounded-[92px] opacity-25"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1180px] left-[1334px] w-[184px] h-[184px] bg-primary rounded-[92px] opacity-25"
        aria-hidden="true"
      />
      <img
        className="absolute top-[221px] left-[1149px] w-[631px] h-[746px]"
        alt=""
        src={vector9}
        aria-hidden="true"
      />
      <header className="flex w-[1640px] items-center justify-between px-0 py-2.5 absolute top-[49px] left-[calc(50.00%_-_820px)]">
        <a
          href="#home"
          className="inline-flex items-center gap-[9px] px-2.5 py-0 relative flex-[0_0_auto]"
          aria-label="Bkalp Design home"
        >
          <span className="relative w-11 h-11" aria-hidden="true">
            <img
              className="absolute w-[58.40%] h-[58.40%] top-[41.60%] left-[41.60%]"
              alt=""
              src={vector23}
            />
            <img
              className="absolute w-[96.88%] h-[96.87%] top-[3.13%] left-[3.12%]"
              alt=""
              src={vector24}
            />
          </span>
          <span className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Bkalp Design
          </span>
        </a>
        <nav
          aria-label="Primary navigation"
          className="flex w-[551px] items-center justify-between relative"
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={
                item.active
                  ? "relative w-fit mt-[-1.00px] [font-family:'Jost-SemiBold',Helvetica] font-semibold text-primary text-2xl tracking-[0] leading-[normal]"
                  : "relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-normal-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <img
          className="relative flex-[0_0_auto]"
          alt="Social media links"
          src={frame32}
        />
      </header>
      <div
        className="absolute top-[-527px] left-[-921px] w-[1837px] h-[1991px]"
        aria-hidden="true"
      >
        <div className="absolute top-[894px] left-[740px] w-[1097px] h-[1097px] bg-[#ffd3d359] rounded-[548.5px] blur-[200px]" />
        <div className="top-0 left-[79px] border-[#ffa3a385] absolute w-[1479px] h-[1479px] rounded-[739.5px] border border-solid" />
        <div className="top-[77px] left-0 border-[#ffa3a385] absolute w-[1479px] h-[1479px] rounded-[739.5px] border border-solid" />
      </div>
      {decorativeOrbit(
        "absolute top-[459px] left-[1290px] w-[2094px] h-[2198px]",
        "absolute top-[304px] left-[304px] w-[1479px] h-[1479px] rounded-[739.5px] border border-solid border-primary rotate-[-48.62deg]",
        "absolute top-[415px] left-[311px] w-[1479px] h-[1479px] rounded-[739.5px] border border-solid border-primary rotate-[-48.62deg]",
      )}

      <main>
        <FloralHeroSection />
        <ServiceBenefitsSection />
        {decorativeVectors.slice(0, 6).map((vector, index) => (
          <div
            key={`${vector.src}-${index}`}
            className={vector.className}
            aria-hidden="true"
          >
            <img
              className={vector.imageClassName}
              alt={vector.alt}
              src={vector.src}
            />
          </div>
        ))}

        <TopSellingProductsSection />
        <div
          className="absolute top-[1941px] left-[-1465px] w-[2158px] h-[2211px]"
          aria-hidden="true"
        >
          <div className="top-[306px] left-[306px] border-primary rotate-[-45.51deg] absolute w-[1479px] h-[1479px] rounded-[739.5px] border border-solid" />
          <div className="top-[428px] left-[375px] border-primary rotate-[-48.62deg] absolute w-[1479px] h-[1479px] rounded-[739.5px] border border-solid" />
        </div>
        <DailyDealSection />
        <div className={decorativeVectors[6].className} aria-hidden="true">
          <img
            className={decorativeVectors[6].imageClassName}
            alt=""
            src={decorativeVectors[6].src}
          />
        </div>
        <img
          className="absolute top-[2615px] left-[1747px] w-[173px] h-[285px]"
          alt=""
          src={maskGroup3}
          aria-hidden="true"
        />
        <img
          className="absolute top-[6298px] left-[1753px] w-[167px] h-[285px]"
          alt=""
          src={image}
        />
        <img
          className="absolute top-[3138px] left-0 w-[226px] h-[380px]"
          alt=""
          src={maskGroup}
          aria-hidden="true"
        />
        <WhyChooseFlowersSection />
        <BestCollectionsSection />
        {decorativeOrbit(
          "top-[6133px] left-[-1401px] absolute w-[2094px] h-[2198px]",
          "absolute top-[304px] left-[304px] w-[1479px] h-[1479px] rounded-[739.5px] border border-solid border-primary rotate-[-48.62deg]",
          "absolute top-[415px] left-[311px] w-[1479px] h-[1479px] rounded-[739.5px] border border-solid border-primary rotate-[-48.62deg]",
        )}

        {decorativeOrbit(
          "top-[6331px] left-[1128px] absolute w-[2094px] h-[2198px]",
          "absolute top-[304px] left-[304px] w-[1479px] h-[1479px] rounded-[739.5px] border border-solid border-primary rotate-[-48.62deg]",
          "absolute top-[415px] left-[311px] w-[1479px] h-[1479px] rounded-[739.5px] border border-solid border-primary rotate-[-48.62deg]",
        )}

        <ClientTestimonialsSection />
      </main>
      <div
        className="absolute top-[6797px] left-0 w-[1920px] h-[695px] bg-[#ffffffe6]"
        aria-hidden="true"
      />
      <footer id="contact">
        <FooterSection />
        <div className="flex w-[1644px] items-center justify-between absolute top-[7378px] left-[140px]">
          <p className="relative w-[528px] mt-[-1.00px] font-paragraph font-[number:var(--paragraph-font-weight)] text-normal-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
            © 2024 all right reserved by bkalpdesign
          </p>
          <p className="relative w-[245px] mt-[-1.00px] font-paragraph font-[number:var(--paragraph-font-weight)] text-primary text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
            Design By- Bkalp design
          </p>
        </div>
        <img
          className="absolute top-[7306px] left-[140px] w-[1640px] h-px object-cover"
          alt=""
          src={line3}
          aria-hidden="true"
        />
        <img
          className="absolute top-[6108px] left-0 w-[238px] h-[379px]"
          alt=""
          src={maskGroup2}
          aria-hidden="true"
        />
      </footer>
    </div>
  );
};
