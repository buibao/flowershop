import { Plus, Star } from "lucide-react";
import type { Product } from "../data/catalog";
import { formatPrice } from "../data/catalog";

type Props = { product: Product; onAdd: (product: Product) => void };

export function ProductCard({ product, onAdd }: Props) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <span className="product-card__shape" aria-hidden="true" />
        <img src={product.image} alt={product.alt} />
        <button
          type="button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={20} />
        </button>
      </div>
      <h3>{product.name}</h3>
      <div className="product-card__details">
        <span>{formatPrice(product.price)}</span>
        <span className="product-card__rating">
          <Star size={15} fill="currentColor" /> 5.0
        </span>
      </div>
    </article>
  );
}
