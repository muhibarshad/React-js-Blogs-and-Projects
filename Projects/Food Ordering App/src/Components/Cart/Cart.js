import { useContext } from "react";
import cartContext from "../../Store/cart-context";
import Model from "../UI/Model";
import * as cartStyle from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  const itemsLength = ctx.item.length > 0;
  const totalAmount = `$ ${ctx.totalAmount.toFixed(2)}`;
  const onRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const onAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul>
      {ctx.item.map((items) => {
        return (
          <CartItem
            id={items.id}
            price={items.price}
            name={items.name}
            amount={items.amount}
            onAdd={onAddHandler.bind(null, items)}
            onRemove={onRemoveHandler.bind(null, items.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Model onClick={props.onClick}>
      {cartItems}
      <div className={cartStyle.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={cartStyle.actions}>
        <button className={cartStyle["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {itemsLength && <button className={cartStyle.button}>Order</button>}
      </div>
    </Model>
  );
};
export default Cart;
