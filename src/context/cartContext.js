import { createContext, useContext, useState } from "react";
export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        count,
        setCount,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => {
  return useContext(CartContext);
};
export default CartProvider;
