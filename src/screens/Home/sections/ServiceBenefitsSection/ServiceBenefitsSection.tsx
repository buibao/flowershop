import shopping from "../../../../assets/design/emojione-monotone-shopping-bags.svg";
import delivery from "../../../../assets/design/fluent-emoji-high-contrast-delivery-truck.svg";
import gift from "../../../../assets/design/emojione-monotone-wrapped-gift.svg";

const benefits = [
  {
    image: shopping,
    title: "Free Shopping",
    description: "Cost on all orders $0.00",
  },
  {
    image: delivery,
    title: "Free Delivery",
    description: "A gift delivered to your door",
  },
  {
    image: gift,
    title: "Gift Ready",
    description: "Made for every special moment",
  },
];

export function ServiceBenefitsSection() {
  return (
    <section
      className="service-benefits container"
      aria-label="Service benefits"
    >
      {benefits.map((benefit) => (
        <article key={benefit.title} className="service-benefit">
          <img src={benefit.image} alt="" />
          <div>
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
