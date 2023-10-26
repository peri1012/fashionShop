import { FaUser } from 'react-icons/fa';
import {Link} from "react-router-dom";
function Account() {
  return (
    <>
    <main>
        <section className="account-content">
            <div className="container">
                <div className="row">
                   <div className="fisrt-part">
                    <h2>Account</h2>
                    <FaUser/> <Link to="/">Log out</Link>
                   </div>
                   <div className="second-part">
                    <div className="left">
                        <h3>Order history</h3>
                        <p>You haven't placed any orders yet.</p>
                    </div>
                    <div className="right">
                        <h3>Account details</h3>
                        <p>United Kingdom</p>
                        <Link to="/">View addresses (1)</Link>
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