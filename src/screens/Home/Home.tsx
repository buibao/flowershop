import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import logo from "../../assets/design/ion-flower-sharp-1.svg";
import { formatPrice, products, type Product } from "../../data/catalog";
import { FloralHeroSection } from "./sections/FloralHeroSection/FloralHeroSection";
import { ServiceBenefitsSection } from "./sections/ServiceBenefitsSection/ServiceBenefitsSection";
import { TopSellingProductsSection } from "./sections/TopSellingProductsSection/TopSellingProductsSection";
import { DailyOffersSection } from "./sections/DailyOffersSection/DailyOffersSection";
import { CustomerBenefitsSection } from "./sections/CustomerBenefitsSection/CustomerBenefitsSection";
import { BestCollectionsSection } from "./sections/BestCollectionsSection/BestCollectionsSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection/ClientTestimonialsSection";
import { SiteFooterSection } from "./sections/SiteFooterSection/SiteFooterSection";

type CartItem = { product: Product; quantity: number };

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#products" },
  { label: "Pages", href: "#collections" },
  { label: "Blog", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const closeCartRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cartOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeCartRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cartOpen]);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      return existing
        ? current.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...current, { product, quantity: 1 }];
    });
    setNotice(`${product.name} added to your cart`);
    setCartOpen(true);
  };

  const changeQuantity = (id: string, amount: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const orderSummary = cart
    .map(
      ({ product, quantity }) =>
        `${product.name} x${quantity} - ${formatPrice(product.price * quantity)}`,
    )
    .join("\n");
  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(
        `Flowers order\n\n${orderSummary}\n\nSubtotal: ${formatPrice(subtotal)}`,
      );
      setNotice("Order details copied to clipboard");
    } catch {
      setNotice("Could not copy order details. Please try again.");
    }
  };

  return (
    <div id="home" className="site-shell">
      <header className="site-header container">
        <a className="brand" href="#home" aria-label="Bkalp Design home">
          <img src={logo} alt="" />
          <span>Bkalp Design</span>
        </a>
        <nav
          className={menuOpen ? "site-nav site-nav--open" : "site-nav"}
          aria-label="Main navigation"
        >
          {navigation.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            href="#products"
            className="header-action header-action--dark"
            aria-label="Browse products"
          >
            <Search size={16} />
          </a>
          <a
            href="#collections"
            className="header-action"
            aria-label="View collections"
          >
            <Heart size={16} />
          </a>
          <button
            type="button"
            className="header-action cart-toggle"
            aria-label={`Open cart with ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={16} />
            {itemCount > 0 && <span>{itemCount}</span>}
          </button>
          <a
            href="#contact"
            className="header-action header-action--account"
            aria-label="Contact us"
          >
            <UserRound size={18} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <FloralHeroSection />
        <ServiceBenefitsSection />
        <TopSellingProductsSection
          products={products.slice(0, 3)}
          onAdd={addToCart}
        />
        <DailyOffersSection products={products.slice(3)} onAdd={addToCart} />
        <CustomerBenefitsSection />
        <BestCollectionsSection />
        <ClientTestimonialsSection />
      </main>
      <SiteFooterSection />

      {cartOpen && (
        <button
          className="drawer-backdrop"
          type="button"
          aria-label="Close cart"
          onClick={() => setCartOpen(false)}
        />
      )}
      <aside
        className={cartOpen ? "cart-drawer cart-drawer--open" : "cart-drawer"}
        role="dialog"
        aria-modal={cartOpen}
        aria-label="Shopping cart"
        aria-hidden={!cartOpen}
      >
        <div className="cart-drawer__header">
          <div>
            <span className="eyebrow">YOUR FLOWERS</span>
            <h2>
              Your cart <small>({itemCount})</small>
            </h2>
          </div>
          <button
            ref={closeCartRef}
            type="button"
            className="icon-button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <ShoppingBag size={42} strokeWidth={1} />
            <p>Your cart is waiting for flowers.</p>
            <button
              type="button"
              className="button button--primary"
              onClick={() => setCartOpen(false)}
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cart.map(({ product, quantity }) => (
                <article className="cart-item" key={product.id}>
                  <img src={product.image} alt={product.alt} />
                  <div className="cart-item__info">
                    <h3>{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>
                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label={`Remove one ${product.name}`}
                        onClick={() => changeQuantity(product.id, -1)}
                      >
                        {quantity === 1 ? (
                          <Trash2 size={15} />
                        ) : (
                          <Minus size={15} />
                        )}
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        aria-label={`Add one ${product.name}`}
                        onClick={() => changeQuantity(product.id, 1)}
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-drawer__footer">
              <div className="subtotal">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Copy the list to share your order details.</p>
              <button
                className="button button--primary button--full"
                type="button"
                onClick={copyOrder}
              >
                Copy order details
              </button>
            </div>
          </>
        )}
      </aside>
      <span className="sr-only" role="status" aria-live="polite">
        {notice}
      </span>
    </div>
  );
}
