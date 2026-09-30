import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector14 from "./vector-14.svg";

const benefits = [
  {
    title: "Free Shopping",
    description: "Cost on all order $0.00",
    divider: line1,
    icon: (
      <div className="relative w-16 h-16" aria-hidden="true">
        <img
          className="absolute w-[87.02%] h-[75.32%] top-[24.68%] left-[12.98%]"
          src={vector10}
          alt=""
        />
        <img
          className="absolute w-[96.88%] h-[96.88%] top-[3.12%] left-[3.12%]"
          src={vector11}
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Free Delivery",
    description: "We offer FREE  deliver",
    divider: line2,
    icon: (
      <div className="relative w-16 h-16" aria-hidden="true">
        <div className="relative w-[93.75%] h-[75.00%] top-[18.75%] left-[3.12%]">
          <img
            className="absolute w-full h-full top-0 left-0"
            src={vector12}
            alt=""
          />
          <img
            className="absolute w-[86.67%] h-[29.17%] top-[70.83%] left-[13.33%]"
            src={vector13}
            alt=""
          />
        </div>
      </div>
    ),
  },
  {
    title: "Free Delivery",
    description: "We offer FREE  deliver",
    divider: null,
    icon: (
      <div className="relative w-16 h-16" aria-hidden="true">
        <img
          className="absolute w-[96.88%] h-[96.88%] top-[3.12%] left-[3.12%]"
          src={vector14}
          alt=""
        />
      </div>
    ),
  },
];

export const ServiceBenefitsSection = (): JSX.Element => {
  return (
    <section
      aria-label="Service benefits"
      className="flex w-[1432px] items-center justify-between px-[130px] py-[57px] absolute top-[1147px] left-[calc(50.00%_-_717px)] bg-[#ffffff] rounded-[80px_0px_80px_0px] opacity-95"
    >
      {benefits.map((benefit, index) => (
        <div key={`${benefit.title}-${index}`} className="contents">
          <article className="gap-6 inline-flex items-center relative flex-[0_0_auto]">
            {benefit.icon}
            <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                {benefit.title}
              </h3>
              <p className="relative w-fit font-description font-[number:var(--description-font-weight)] text-normal-dark text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
                {benefit.description}
              </p>
            </div>
          </article>
          {benefit.divider && (
            <img
              className="relative w-0.5 h-[42px]"
              src={benefit.divider}
              alt=""
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </section>
  );
};
