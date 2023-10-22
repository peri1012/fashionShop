import { createContext, useState } from "react";

export const Context= createContext()

export const MainContext = ({children})=>{
    const [cart,setCart]=useState([]);

    const addToCart=(data)=>{
        const existingProduct= cart.find(item=>item.id==data.id)
        if(existingProduct){
            const updatedCart= cart.filter(product=>{
                if(product.id===existingProduct.id){
                    return {...existingProduct,quantity:existingProduct.quantity++}
                }else{
                    return product
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart,{...data,quantity:1}]);
        }
        
    }
    const globalStates={
        cart,
        setCart,
        //functions
        addToCart
    }
    


    return <Context.Provider value={globalStates}>{children}</Context.Provider>
};