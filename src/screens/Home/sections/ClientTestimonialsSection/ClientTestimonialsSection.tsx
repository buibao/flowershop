import { Star } from "lucide-react";
import quote from "../../../../assets/design/bxs-quote-alt-left.svg";
import cornerFlowerLeft from "../../../../assets/design/mask-group-3@2x.png";
import cornerFlowerRight from "../../../../assets/design/mask-group-1@2x.png";

export function ClientTestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonials section-pad"
      aria-labelledby="testimonials-heading"
    >
      <img
        className="section-flower testimonials__flower--left"
        src={cornerFlowerLeft}
        alt=""
        aria-hidden="true"
      />
      <img
        className="section-flower testimonials__flower--right"
        src={cornerFlowerRight}
        alt=""
        aria-hidden="true"
      />
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2 id="testimonials-heading">
            What our <em>Clients Say</em>
          </h2>
        </div>
        <img
          className="testimonials__quote testimonials__quote--left"
          src={quote}
          alt=""
        />
        <img
          className="testimonials__quote testimonials__quote--right"
          src={quote}
          alt=""
        />
        <blockquote>
          “The flowers were absolutely beautiful and arrived just as pictured.
          The colors, the details, and the care in the arrangement made such a
          lovely gift.”
        </blockquote>
        <div className="testimonials__meta">
          <div>
            <strong>Bkalp Design</strong>
            <span>Happy Customer</span>
          </div>
          <div className="testimonials__stars" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
