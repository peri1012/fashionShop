import {object, string} from 'yup';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {successMessage, errorMessage} from "../utils/toastMessage";
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
    const navigate=useNavigate()
    const registerSchema=object({
        name:string().required().trim(),
        surname:string().required().trim(),
        email:string().required("Email can't be blank.").trim(),
        password:string().required("Password can't be blank.").trim().matches(/[a-zA-Z0-9]{8,18}$/)
    })
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: yupResolver(registerSchema)
    })
    const submitForm =async (data)=>{
        await axios
        .post(process.env.REACT_APP_REGISTER,data)
        .then(res=>{
           successMessage();
           navigate("/login")
        })
        .catch((err)=>{
            errorMessage();
        })

    }
    

  return (
    <>
    <main>
        <section className="account-content">
            <div className="container">
                <div className="row">
                    <form className='form' onSubmit={handleSubmit(submitForm)}>
                        
                        <label  className='title'>Create account</label>
                        <div className="detail">
                        {/* <span>
                            Please adjust the following:
                            <ul>
                                <li>Password can't be blank</li>
                                <li>Email can't be blank</li>
                            </ul>
                        </span> */}
                            <input type="text" name="name" {...register("name")}  placeholder='First Name'/>
                            <input type="text" name="surname"  {...register("surname")}placeholder='Last Name'/>
                            <input type="email" name="email" {...register("email")} placeholder='Email' id="email"/>
                            {errors.email && <span>{errors.email.message}</span>}
                            <input type="password" name="password" {...register("password")} placeholder='Password' id="password"/>
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                        
                        <div className="actions">
                            <button className='button'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    </main>
    </>
  )
}

export default CreateAccount