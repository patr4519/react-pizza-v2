import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div>Ваша корзина пустая</div>
      <Link to="/">
        <button>На главную</button>
      </Link>
    </>
  );
};

export default CartEmpty;
