import React from "react";
import { Link } from "react-router-dom";
import emptyCart from "../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="cartEmpty">
      <h2>Ваша корзина пустая</h2>
      <p>Купите хоть что-нибудь:)</p>
      <img width={400} height={370} src={emptyCart} alt="empty-cart" />
      <Link to="/">
        <button className="buttonCart">На главную</button>
      </Link>
    </div>
  );
};

export default CartEmpty;
