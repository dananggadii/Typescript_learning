import { Category, Product } from "../src/alias";

const category: Category = {
  id: "1",
  name: "Handphone",
};

const product: Product = {
  id: "1",
  name: "Nokia",
  price: 300000,
  category: category,
};

console.info(product);
