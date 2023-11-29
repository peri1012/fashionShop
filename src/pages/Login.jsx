import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {object, string} from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Auth} from '../utils/AuthContext';
function Login() {
    const {logIn}=useContext(Auth);
    const loginSchema=object({
        email:string().required("Email can't be blank.").trim(),
        password:string().required("Password can't be blank.").trim().matches(/[a-zA-Z0-9]{8,18}$/)
    })
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: yupResolver(loginSchema)
    })
    const submitForm =(data)=>{
        logIn(data)
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
                            <input type="email" name="email" placeholder='Email' {...register("email")} />
                            {errors.email && <span>{errors.email.message}</span>}
                            <input type="password" name="password"  placeholder='Password'{...register("password")} />
                            {errors.password && <span>{errors.password.message}</span>}
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