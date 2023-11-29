import { FaUser } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useContext} from 'react';
import { Auth } from '../utils/AuthContext';
function Account() {
    const{logOut}=useContext(Auth);
  return (
    <>
    <main>
        <section className="account-content">
            <div className="container">
                <div className="row">
                   <div className="first-part">
                    <h2>Account</h2>
                    <FaUser className='color'/> <Link to="/" className='message color' onClick={logOut}>Log out</Link>
                   </div>
                   <div className="second-part">
                    <div className="left">
                        <h3 className='font-medium'>Order history</h3>
                        <p className='font-paragraph'>You haven't placed any orders yet.</p>
                    </div>
                    <div className="right">
                        <h3 className='font-medium'>Account details</h3>
                        <p className='font-paragraph'>United Kingdom</p>
                        <Link to="/" className='message color'>View addresses (1)</Link>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Account