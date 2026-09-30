import flowerArt from "../../../../assets/design/image-18.png";

const benefits = [
  {
    title: "Lifetime Use",
    description: "Flowers to make every little moment feel memorable.",
  },
  {
    title: "Customization",
    description: "A bouquet that can feel as unique as you are.",
  },
  {
    title: "Eco-friendly",
    description: "An arrangement made to bring lasting joy.",
  },
  {
    title: "Comical Free",
    description: "Thoughtfully made with a playful floral touch.",
  },
  {
    title: "Best Quality",
    description: "Beautiful details in every petal and leaf.",
  },
  {
    title: "Wall hanging flower / bouquet",
    description: "Find the right flowers for your space or celebration.",
  },
];

export function CustomerBenefitsSection() {
  return (
    <section
      id="about"
      className="customer-benefits section-pad"
      aria-labelledby="benefits-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">PRODUCTS</span>
          <h2 id="benefits-heading">
            Why choose <em>Our Flowers</em>
          </h2>
        </div>
        <div className="customer-benefits__layout">
          <div className="customer-benefits__cards customer-benefits__cards--left">
            {benefits
              .filter((_, index) => index % 2 === 0)
              .map((benefit) => (
                <article key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
          </div>
          <div className="customer-benefits__image">
            <img
              src={flowerArt}
              alt="Pink, coral and cream floral wall arrangement"
            />
            <span className="sparkle" aria-hidden="true">
              ✦
            </span>
          </div>
          <div className="customer-benefits__cards customer-benefits__cards--right">
            {benefits
              .filter((_, index) => index % 2 === 1)
              .map((benefit) => (
                <article key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
