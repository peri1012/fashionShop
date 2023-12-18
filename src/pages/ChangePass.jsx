import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useNavigate } from 'react-router-dom';


function ChangePass() {
  const {register,handleSubmit}=useForm()
  const navigate=useNavigate()
  const onSubmit=async (data) =>{
      
      const body={
        token: JSON.parse(localStorage.getItem("token")),
        password: data.password
      }

      await axios.post(process.env.REACT_APP_CHANGE,body)
      .then(res=>{
          console.log(res)
          navigate("/login")
          localStorage.removeItem("token")
      }).catch(err=>{
          console.log(err);
      })
  }
  return (
    <>
  <main>
      <section className="change-content">
          <div className="container">
              <div className="row">
              <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <label htmlFor="password" className='title'>Change your password</label>
                <input type="password" name="password" {...register("password")}/>
                <button className='button'>Change Password</button>    
              </form>
              </div>
          </div>
      </section>
  </main>
  </>
  )
}

export default ChangePass