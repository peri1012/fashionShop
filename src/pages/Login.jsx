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
                    <form action="">
                        <label htmlFor="">Login</label>
                        <input type="email" name="email" id="" />
                        <input type="password" name="password" id="" />
                        <Link to="/">Forgot your password?</Link>
                        <button>Sign in</button>
                        <Link to="/">Create account</Link>
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