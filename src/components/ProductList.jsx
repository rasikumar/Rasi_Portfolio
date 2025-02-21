import { useCart } from "../context/CartProvider";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-3 py-1">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
