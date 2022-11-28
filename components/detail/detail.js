import classes from "./detail.module.css";
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
const Detail = (props) => {
  const { src, category, title, id, price, description, href } = props;
  const [count, setCount] = useState(0);
  const handleIncre = () => {
    setCount(count + 1);
  };
  const handleDecre = () => {
    setCount(count - 1);
  };
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <img src={src} width="300" height="300" alt="image"></img>
      </div>
      <div className={classes.info}>
        <div className={classes.category}>{category}</div>
        <div className={classes.title_id}>
          <div className={classes.title}>{title}</div>
          <div className={classes.id_price}>
            <span className={classes.id}>ID : {id}</span>
            <span className={classes.price}>PRICE : ${price}</span>
          </div>
        </div>
        <div className={classes.description}>
          <h1>Description: </h1>
          {description}
        </div>
        <div className={classes.cart_back}>
          <div className={classes.cart}>
            <button onClick={handleDecre} className={classes.decre}>
              -
            </button>
            <span className={classes.zero}>{count}</span>
            <button onClick={handleIncre} className={classes.incre}>
              +
            </button>
            <span>
              <BsFillCartFill className={classes.icon} />
            </span>
          </div>
          <button className={classes.back}>
            <Link href={`${href}`}>Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
