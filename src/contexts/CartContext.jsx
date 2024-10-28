import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
function CartProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initial render
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  }); /////////////////////local storage////////
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  ////////////add product//////////
  const addToCart = (product) => {
    const newProduct = {
      category: product.category,
      description: product.description,
      id: product.id,
      image: product.image,
      price: product.price,
      rating: product.rating.rate,
      title: product.title,
      quantity: 1,
    };

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Increase quantity if the product is already in the cart
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with a quantity of 1
        return [...prevCart, newProduct]; // <== Fixed: Removed extra object wrapper
      }
    });
  };
  //////////////////////increment cart quantity//////////

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  //////////////////////decrement cart quantity////////
  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };
  ///////////////delete item////
  const deleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        deleteItem,
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cart context was used outside the scope");
  return context;
}
export { CartProvider, useCart };
