import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <>
    <Header/>
    <main>
        <section className="login-content">
            <div className="container">
                <div className="row">
                    <form action="" className='form'>
                        <label htmlFor="" className='title'>Login</label>
                        <div className="detail">
                            <input type="email" name="email" id="" placeholder='Email'/>
                            <input type="password" name="password" id="" placeholder='Password'/>
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
    <Footer/>
    </>
  )
}

export default Login