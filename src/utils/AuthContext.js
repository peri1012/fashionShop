import { createContext, useState } from "react";
import { useEffect } from "react";
import Loader from '../components/Loader';
import axios from "axios";
export const Auth=createContext()

export const AuthContext= ({children}) =>{
    
    const [userIn,setUserIn]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        checkLogin()
    },[])
    
    const checkLogin=async () =>{
        
        const data={
            token: JSON.parse(localStorage.getItem("token")),
        }
        if(data.token!==null){
            await axios.post(process.env.REACT_APP_CHECK_LOGIN,data)
        .then(res=>{
            setUserIn(true);
            setLoading(false);
        })
        .catch((err)=>{
            setUserIn(false);
            setLoading(false);
        })
        }else{
            setLoading(false)
        }
    }

    const logOut =() =>{
        localStorage.removeItem("token")
        setUserIn(false)
    }

    const globalStates= {userIn,setUserIn,loading, setLoading};
   
    return (
    <Auth.Provider value={globalStates}>
        {loading && <Loader/>}
        {children}
    </Auth.Provider>
    );
}