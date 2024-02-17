import { createContext, useState } from "react";

const CartContext = createContext();
const Provider = ({ children }) => {
  const [card, setCard] = useState([]);

  //get amount
  const amount = (product) => {
    const isProductExist = card.find((item) => item.id === product.id);

    return isProductExist ? isProductExist.quantity : 0;
  };

  //Add product to cart
  const addToCard = (product) => {
    //find product if exist
    const isProductExist = card.find((item) => item.id === product.id);
    //if exist already ,add qty+1
    if (isProductExist) {
      return setCard((prevCart) => {
        return prevCart.map((item) => {
          if (item.id === isProductExist.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      });
    }
    //else qty:1
    return setCard((prevCart) => {
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  // remove product from Cart
  const removeFromCart = (product) => {
    const isProductExist = card.find((item) => item.id === product.id);
    if (isProductExist) {
      if (isProductExist.quantity > 1) {
        return setCard((prevCart) => {
          return prevCart.map((item) => {
            if (item.id === isProductExist.id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
        });
      }
      return setCard((prevCart) => {
        return card.filter((item) => item.id !== isProductExist.id);
      });
    }
  };

  const getCountQuantity = (product) => {
    const isProductExist = card.find((item) => item.id === product.id);
    return isProductExist ? isProductExist.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{ card, addToCard, removeFromCart, getCountQuantity, amount, setCard }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { Provider, CartContext };
