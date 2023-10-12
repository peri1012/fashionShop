import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Reset() {
  return (
    <>
    <Header/>
    <main>
        <section className="reset-content">
            <div className="container">
                <div className="row">
                    <form action="" className='form'>
                        <label htmlFor="" className='title'>Reset your password</label>
                        <div className="detail">
                            <div className="info">
                                <p>We will send you an email to reset your password</p>
                            </div>
                            <input type="email" name="email" id="" placeholder='Email'/>
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
    <Footer/>
    </>
  )
}
export default Reset;
