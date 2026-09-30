import logo from "../../../../assets/design/ion-flower-sharp-1.svg";
import appBadges from "../../../../assets/design/image-27@2x.png";

export function SiteFooterSection() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__intro">
            <a className="brand" href="#home">
              <img src={logo} alt="" />
              <span>Flowers</span>
            </a>
            <p>
              Flowers for every occasion, arranged with care to bring color to
              your day.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Home</h2>
            <a href="#products">Product</a>
            <a href="#collections">Pages</a>
            <a href="#testimonials">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav aria-label="Product links">
            <h2>Products</h2>
            <a href="#collections">Winter Collection</a>
            <a href="#collections">Summer Collection</a>
            <a href="#offers">Special Discount</a>
            <a href="#products">Top rated Products</a>
          </nav>
          <div>
            <h2>Payment Method</h2>
            <p>Credit card</p>
            <p>Debit card</p>
            <p>Bank Transfer</p>
            <p>Paypal</p>
          </div>
          <div>
            <h2>Get Online</h2>
            <img
              className="site-footer__app-badges"
              src={appBadges}
              alt="Google Play and App Store badge artwork"
            />
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} all rights reserved by bkalpdesign
          </span>
          <span>Design By — Bkalp design</span>
        </div>
      </div>
    </footer>
  );
}
