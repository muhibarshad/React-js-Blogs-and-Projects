import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
function App() {
  const [isCartShown, updateCartShown] = useState(false);

  const showCartHandler = () => {
    updateCartShown(true);
  };
  const hideCartHandler = () => {
    updateCartShown(false);
  };

  return (
    <Fragment>
      {isCartShown && <Cart onClick={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
