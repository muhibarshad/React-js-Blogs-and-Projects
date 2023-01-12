import React, { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.item.findIndex(
      (items) => items.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      item: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.item.findIndex(
      (items) => items.id === action.id
    );
    const existingItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter((items) => items.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartReducer] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemhandler = (item) => {
    dispatchCartReducer({
      type: "ADD",
      item: item,
    });
  };
  const removeItemhandler = (id) => {
    dispatchCartReducer({
      type: "REMOVE",
      id: id,
    });
  };
  const cartValue = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemhandler,
    removeItem: removeItemhandler,
  };
  return (
    <cartContext.Provider value={cartValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
