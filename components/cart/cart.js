import classes from "./cart.module.css";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context";
const Detail = (props) => {
  // const { src, category, price, description } = props;
  const { product } = props;
  console.log(product);
  const { card, addToCard, removeFromCart, getCountQuantity, amount } =
    useContext(CartContext);

  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <img src={product.src} width="140" height="140" alt="image"></img>
      </div>
      <div className={classes.info}>
        <div className={classes.header}>
          <div className={classes.category}>{product.title}</div>
          <div className={classes.price_button}>
            <div className={classes.price}>
              ${product.price} x <span>{amount(product)} </span>
            </div>
            <div className={classes.button}>
              <span
                className={classes.decre}
                onClick={() => {
                  removeFromCart(product);
                }}
              >
                -
              </span>
              <span className={classes.zero}>{getCountQuantity(product)}</span>
              <span
                onClick={() => {
                  addToCard(product);
                }}
                className={classes.incre}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className={classes.description}>
          {/* <h1>Description: </h1> */}
          {product.description}
        </div>
      </div>
    </div>
  );
};
export default Detail;
