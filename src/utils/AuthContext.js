import { createContext, useState } from "react";
import { useEffect } from "react";
import Loader from '../components/Loader';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Auth=createContext()

export const AuthContext= ({children}) =>{
    const navigate=useNavigate();
    const [userIn,setUserIn]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        checkLogin()
    },[]);
    
    const checkLogin=async () =>{
        setLoading(true);
        const data={
            token: JSON.parse(localStorage.getItem("token")),
        }
        if(data.token!==null){
            await axios.post(process.env.REACT_APP_CHECK,data)
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

    const logIn=async (data) =>{
        setLoading(true)
        await axios
        .post(process.env.REACT_APP_LOGIN,data)
        .then(res=>{
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigate("/account");
            setLoading(false);
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const logOut =() =>{
        localStorage.removeItem("token")
        setUserIn(false)
    }

    const globalStates= {userIn,setUserIn,loading, setLoading,logOut,logIn};
   
    return (
    <Auth.Provider value={globalStates}>
        {loading && <Loader/>}
        {children}
    </Auth.Provider>
    );
}