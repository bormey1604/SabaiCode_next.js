import classes from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context";
const Card = (props) => {
  const { category, src, id, price, title, productLink, description } = props;
  const product = props;
  const { addToCard, removeFromCart, cart, getCountQuantity } = useContext(CartContext);

  return (
    <div className={classes.container}>
      <div className={classes.category}>{category}</div>
      <div className={classes.img}>
        <Image src={src} width="300" height="135" alt="Image"></Image>
      </div>
      <div className={classes.id_price}>
        <div className={classes.id}>ID: {id}</div>
        <div className={classes.price}>PRICE: ${price}</div>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.more_cart}>
        <div className={classes.more}>
          <Link href={`${productLink}`}>More Info</Link>
        </div>
        <div className={classes.cart}>
          <span
            className={classes.minus}
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
            className={classes.add}
          >
            +
          </span>
          <span>
            <BsFillCartFill className={classes.icon} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
