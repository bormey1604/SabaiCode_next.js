import React, { useContext } from "react";
import { CartContext } from "../../context";
import Carts from "../../components/cart/cart";
import Link from "next/link";
import Signup from "../signup";
import styles from "./cart.module.css";
import { UserToken } from "../../context/userToken";
import Router from "next/router";

const Cart = () => {
  const { card, setCard } = useContext(CartContext);
  console.log(card);
  let total = 0;
  let qty = 0;
  card.forEach((value) => {
    qty += value.quantity;
    total += value.price * value.quantity;
  });

  //token
  const { token } = useContext(UserToken);
  console.log(!token);
  const submitHandler = () => {
    if (!token) {
      Router.push("/signup");
    } else {
      setCard([]);
      alert("Purchased Successfully ! ");
    }
  };
  return (
    <div>
      <div>
        {card.length > 0 ? (
          card.map((item) => <Carts key={item.id} product={item} />)
        ) : (
          <div>No Item</div>
        )}
      </div>
      {/* <div className="flex flex-col justify-center items-center text-3xl font-bold  my-5 bg-yellow-300 w-96 m-auto py-3"> */}
      <div className={styles.payment}>
        <div className={styles.checkout}>
          <h1 className="font-sans">
            Total Price = <span>${total.toFixed(2)}</span>
          </h1>
          <h1 className="font-sans">
            Total Items = <span>{qty}</span>
          </h1>

          <button className={styles.button} onClick={submitHandler}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
