import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
function App() {
  const [isCartShown, updateCartShown] = useState(false);

  const showCartHandler = () => {
    updateCartShown(true);
  };
  const hideCartHandler = () => {
    updateCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClick={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
