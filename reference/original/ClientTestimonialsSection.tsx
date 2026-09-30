import star1 from "./star-1.svg";
import star2 from "./star-2.svg";
import star3 from "./star-3.svg";
import star4 from "./star-4.svg";
import star5 from "./star-5.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";

const stars = [star1, star2, star3, star4, star5];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="absolute top-[6037px] left-0 w-[1920px] h-[760px] bg-[#ffffff1f] overflow-hidden border-t [border-top-style:solid] border-[#ffffff]"
    >
      <div className="inline-flex absolute top-[136px] left-[calc(50.00%_-_343px)] flex-col items-center">
        <div className="inline-flex items-center justify-center gap-2.5 px-6 py-0 relative flex-[0_0_auto]">
          <h2
            id="testimonials-heading"
            className="relative w-fit mt-[-4.00px] font-h3 font-[number:var(--h3-font-weight)] text-normal-dark text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]"
          >
            TESTIMONIALS
          </h2>
        </div>
        <p className="relative w-fit font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[length:var(--h1-font-size)] text-center tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
          <span className="text-[#303030] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            What our{" "}
          </span>
          <span className="text-[#ff7f7f] font-h1 [font-style:var(--h1-font-style)] font-[number:var(--h1-font-weight)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] text-[length:var(--h1-font-size)]">
            Clients Say
          </span>
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-[115px] left-[1346px] w-[248px] h-[248px] flex -rotate-180 opacity-25"
      >
        <img className="flex-1 w-[207.28px] rotate-180" alt="" src={vector5} />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-[543px] left-[230px] w-[248px] h-[248px] flex opacity-25"
      >
        <img className="flex-1 w-[207.28px]" alt="" src={vector6} />
      </div>
      <div className="inline-flex flex-col items-center justify-center gap-[26px] absolute top-[332px] left-[calc(50.00%_-_555px)]">
        <p className="w-[1059px] mt-[-1.00px] text-normal-dark text-[length:var(--paragraph-font-size)] text-center relative font-paragraph font-[number:var(--paragraph-font-weight)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
          Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo tellus
          diam mauris dolor at dui.Lorem ipsum dolor sit amet consectetur.
          Posuere dolor commodo tellus diam mauris dolor at dui.Lorem ipsum
          dolor sit amet consectetur. Posuere dolor commodo tellus diam mauris
          dolor at dui.Lorem ipsum dolor sit amet consectetur. Posuere dolor
          commodo tellus diam mauris dolor at dui.
        </p>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[9px] px-6 py-1.5 relative flex-[0_0_auto] border-l-2 [border-left-style:solid] border-primary">
            <div className="relative w-[157px] mt-[-2.00px] font-h4 font-[number:var(--h4-font-weight)] text-dark text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
              Bkalp Design
            </div>
            <div className="relative w-[157px] font-paragraph font-[number:var(--paragraph-font-weight)] text-normal-dark text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
              UI/UX Designer
            </div>
          </div>
          <div
            aria-label="5 out of 5 stars"
            className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]"
          >
            {stars.map((star, index) => (
              <img
                key={`testimonial-star-${index}`}
                className="relative w-[30.43px] h-[28.94px]"
                alt=""
                src={star}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
