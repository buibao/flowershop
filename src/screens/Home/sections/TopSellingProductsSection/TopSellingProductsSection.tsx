import { ProductCard } from "../../../../components/ProductCard";
import type { Product } from "../../../../data/catalog";

export function TopSellingProductsSection({
  products,
  onAdd,
}: {
  products: Product[];
  onAdd: (product: Product) => void;
}) {
  return (
    <section
      id="products"
      className="top-products section-pad container"
      aria-labelledby="products-heading"
    >
      <div className="section-heading">
        <span className="eyebrow">PRODUCTS</span>
        <h2 id="products-heading">
          This month’s top selling <em>Product</em>
        </h2>
      </div>
      <div className="top-products__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
