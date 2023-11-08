import { createContext, useEffect, useState } from "react";

export const Context= createContext()

export const MainContext = ({children})=>{
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        saveCart();
    },[]);

    const addToCart = (data) => {
        const existingProductIndex = cart.findIndex((item) => item.id === data.id);
      
        if (existingProductIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].quantity += 1;
          setCart(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
          setCart([...cart, { ...data, quantity: 1 }]);
          localStorage.setItem(
            "cart",
            JSON.stringify([...cart, { ...data, quantity: 1 }])
          );
        }
      };
      
    const removeCartFromCart=(id)=>{
        const updatedCart=cart.filter((item)=>item.id !== id);
        setCart(updatedCart);
    };
    const saveCart =() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    const globalStates={
        cart,
        setCart,
        //functions
        addToCart,
        removeCartFromCart
    };
    


    return <Context.Provider value={globalStates}>{children}</Context.Provider>
};