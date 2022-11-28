import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import classes from "../../styles/Home.module.css";

const Stores = () => {
  const api = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      // console.log(data);
      setProduct(data);
    } catch (error) {}
  };
  console.log(product);
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className={classes.grid}>
      {product.map((item, index) => {
        return (
          <div key={index}>
            <Card
              category={item.category}
              src={item.image}
              id={item.id}
              price={item.price}
              title={item.title}
              productLink={`/stores/${item.id}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Stores;
