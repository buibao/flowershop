import topPink from "../assets/design/image-22@2x.png";
import topColorful from "../assets/design/image-2.png";
import topRose from "../assets/design/image-11@2x.png";
import dealPink from "../assets/design/image-9@2x.png";
import dealOrange from "../assets/design/image-9-1@2x.png";
import dealViolet from "../assets/design/image-16@2x.png";
import collectionOne from "../assets/design/image-15.png";
import collectionTwo from "../assets/design/image-19.png";
import collectionThree from "../assets/design/image-22-1.png";
import collectionFour from "../assets/design/image-25.png";
import collectionFive from "../assets/design/image-20.png";
import collectionSix from "../assets/design/image-1.png";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
  category: string;
  originalPrice?: number;
};

export const products: Product[] = [
  {
    id: "bouquet-01",
    name: "Combo Bouquet 01",
    price: 40,
    image: topPink,
    alt: "Soft pink and cream flower bouquet",
    category: "Best seller",
  },
  {
    id: "bouquet-02",
    name: "Combo Bouquet 02",
    price: 40,
    image: topColorful,
    alt: "Colorful peach and lavender flower bouquet",
    category: "Best seller",
  },
  {
    id: "bouquet-03",
    name: "Combo Bouquet 03",
    price: 40,
    image: topRose,
    alt: "Pink and burgundy rose bouquet",
    category: "Best seller",
  },
  {
    id: "basket-01",
    name: "Garden Flower Basket",
    price: 24,
    originalPrice: 30,
    image: dealPink,
    alt: "Pink and white flowers in a wicker basket",
    category: "Daily offer",
  },
  {
    id: "basket-02",
    name: "Sunny Flower Basket",
    price: 24,
    originalPrice: 30,
    image: dealOrange,
    alt: "Orange and white flowers in a wicker basket",
    category: "Daily offer",
  },
  {
    id: "basket-03",
    name: "Pastel Flower Basket",
    price: 24,
    originalPrice: 30,
    image: dealViolet,
    alt: "Pink and purple flowers in a wicker basket",
    category: "Daily offer",
  },
];

export const collections = [
  { image: collectionOne, alt: "Cream and blush floral collection" },
  { image: collectionTwo, alt: "Pink floral collection" },
  { image: collectionThree, alt: "Peach and ivory floral collection" },
  { image: collectionFour, alt: "White and pink rose collection" },
  { image: collectionFive, alt: "Soft ivory floral collection" },
  { image: collectionSix, alt: "Cream flower collection" },
];

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;
