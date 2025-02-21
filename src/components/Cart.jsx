import { useCart } from "../context/CartProvider";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, checkout } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : null}

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>
              {item.name} - ${item.price} x {item.quantity}
            </p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <button onClick={checkout}>Proceed to Checkout</button>
      )}
    </div>
  );
};

export default Cart;
