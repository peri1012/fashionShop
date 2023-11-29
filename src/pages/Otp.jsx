import axios from 'axios';
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Otp() {
  const {register,handleSubmit}=useForm()
  const navigate=useNavigate()
  const onSubmit=async (data) =>{
      
      const body={
        token: JSON.parse(localStorage.getItem("token")),
        otp:data.otp
      }

      await axios.post(process.env.REACT_APP_OTP,body)
      .then(res=>{
          console.log(res)
          navigate("/change-password")
      }).catch(err=>{
          console.log(err);
      })
  }


return (
  <>
  <main>
      <section className="otp-content">
          <div className="container">
              <div className="row">
              <form onSubmit={handleSubmit(onSubmit)} className='form'>
                      <label htmlFor="otp" className='title'>Otp Code</label>
                      
                          <input type="text" name="otp" {...register("otp")}/>
                     
                          <button className='button'>Verify Otp</button>
                      
                  </form>
              </div>
          </div>
      </section>
  </main>
  </>
)
}

export default Otp