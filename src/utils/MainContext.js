import { createContext, useEffect, useState } from "react";

export const Context= createContext()

export const MainContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCartPage = (data) => {
    const existingProduct = cart.find((item) => item.id === data.id);

    if (existingProduct) {
      const updatedCart = cart.filter((product)=>{
        if(product.id===existingProduct.id){
          return{...existingProduct, quantity: existingProduct.quantity++};
        }else{
          return product;
        }
      })
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      setCart([...cart, {...data, quantity:1}]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

  };

  const removeFromCart=(id)=>{
    const updatedCart=cart.filter((item)=>item.id !==id)
    setCart(updatedCart)
  }

  
  const globalStates = {
    cart,
    setCart,
    cartVisible,
    setCartVisible,
    // functions
    addToCartPage,
    removeFromCart
  };

  return <Context.Provider value={globalStates}>{children}</Context.Provider>;
};

