import { useEffect, useState } from "react";
import type { Product } from "../../../../data/catalog";
import { formatPrice } from "../../../../data/catalog";
import cornerFlowerRight from "../../../../assets/design/mask-group@2x.png";
import cornerFlowerLeft from "../../../../assets/design/mask-group-2@2x.png";

function timeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const seconds = Math.max(
    0,
    Math.floor((midnight.getTime() - now.getTime()) / 1000),
  );
  return [
    "00",
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ].map((value) => String(value).padStart(2, "0"));
}

function DealCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (product: Product) => void;
}) {
  return (
    <article className="deal-card">
      <div className="deal-card__image">
        <span aria-hidden="true" />
        <img src={product.image} alt={product.alt} />
      </div>
      <div className="deal-card__body">
        <h3>{product.name}</h3>
        <p>
          Brighten their day with a colorful floral arrangement, carefully put
          together for a moment they will remember.
        </p>
        <div className="deal-card__bottom">
          <div>
            <strong>{formatPrice(product.price)}</strong>{" "}
            {product.originalPrice && (
              <del>{formatPrice(product.originalPrice)}</del>
            )}
          </div>
          <button type="button" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export function DailyOffersSection({
  products,
  onAdd,
}: {
  products: Product[];
  onAdd: (product: Product) => void;
}) {
  const [time, setTime] = useState(timeUntilMidnight);
  useEffect(() => {
    const id = window.setInterval(() => setTime(timeUntilMidnight()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section
      id="offers"
      className="daily-offers section-pad"
      aria-labelledby="offers-heading"
    >
      <img
        className="section-flower daily-offers__flower--right"
        src={cornerFlowerRight}
        alt=""
        aria-hidden="true"
      />
      <img
        className="section-flower daily-offers__flower--left"
        src={cornerFlowerLeft}
        alt=""
        aria-hidden="true"
      />
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">OFFERS</span>
          <h2 id="offers-heading">Deal of the day</h2>
          <div
            className="countdown"
            aria-label="Time remaining in today's offer"
          >
            {time.map((value, index) => (
              <div key={index}>
                <strong>{value}</strong>
                <span>{["Days", "Hours", "Mins", "Secs"][index]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="daily-offers__grid">
          {products.map((product) => (
            <DealCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
