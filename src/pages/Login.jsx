import React from 'react';
import { Link } from 'react-router-dom';
import {object, string} from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate=useNavigate()
    const loginSchema=object({
        email:string().required("Email can't be blank.").trim(),
        password:string().required("Password can't be blank.").trim().matches(/[a-zA-Z0-9]{8,18}$/)
    })
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: yupResolver(loginSchema)
    })
    const submitForm =async (data)=>{
        await axios
        .post(process.env.REACT_APP_LOGIN,data)
        .then(res=>{
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigate("/account")
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    
  return (
    <>
    <main>
        <section className="login-content">
            <div className="container">
                <div className="row">
                    <form className='form' onSubmit={handleSubmit(submitForm)}>
                        <label className='title'>Login</label>
                        <div className="detail">
                            <input type="email" name="email" placeholder='Email' {...register("email")}/>
                            <input type="password" name="password"  placeholder='Password'{...register("password")} />
                            <div className="forget">
                            <Link to="/reset" className='link'>Forgot your password?</Link>
                            </div>
                        </div>
                        
                        <div className="actions">
                            <button className='button'>Sign in</button>
                            <Link to="/create" className='link'>Create account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Login