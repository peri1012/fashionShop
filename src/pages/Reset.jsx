import axios from 'axios';
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Reset() {
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()
    const onSubmit=async (data) =>{
        
        const body={
            token: JSON.parse(localStorage.getItem("token")),
            email:data.email
        }
        await axios.post(process.env.REACT_APP_RESET,body)
        .then(res=>{
            console.log(res)
            navigate("/otp")
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
    <>
    <main>
        <section className="reset-content">
            <div className="container">
                <div className="row">
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                        <label htmlFor="reset" className='title'>Reset your password</label>
                        <div className="detail">
                            <div className="info">
                                <p>We will send you an email to reset your password</p>
                            </div>
                            <input type="email" name="email" {...register("email")} placeholder='Email'/>
                        </div>
                        <div className="actions">
                            <button className='button'>Submit</button>
                            <Link to="/login" className='link'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}
export default Reset;
