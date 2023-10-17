import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreateAccount() {
  return (
    <>
    <Header/>
    <main>
        <section className="account-content">
            <div className="container">
                <div className="row">
                    <form action="" className='form'>
                        <label htmlFor="" className='title'>Create account</label>
                        <div className="detail">
                            <input type="text" name="FirstName" id="" placeholder='First Name'/>
                            <input type="text" name="LastName" id="" placeholder='Last Name'/>
                            <input type="email" name="email" id="" placeholder='Email'/>
                            <input type="password" name="password" id="" placeholder='Password'/>
                            
                        </div>
                        
                        <div className="actions">
                            <button className='button'>Create</button>
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

export default CreateAccount