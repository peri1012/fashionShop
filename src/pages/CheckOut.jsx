import { FaBox} from 'react-icons/fa';
import {Link} from 'react-router-dom';
function CheckOut() {
  return (
    <div className="content">
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="page-name">
                        <h2>The Fashion Shop</h2>
                    </div>
                    <div className="shop">
                        <Link to="/cart"><FaBox/></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='main'>
            <div className="container">
                <div className="row">
                    <div className="right">
                        <div className="product">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="name"></div>
                            <div className="price"></div>
                        </div>
                        <div className="gift">
                            <input type="text" placeholder='Gift card' />
                            <button>Apply</button>
                        </div>
                        <div className="info">
                            <table>
                                <td className="first">
                                    <tr>Subtotal</tr>
                                    <tr>Pickup</tr>
                                    <tr>Total </tr>
                                    <span>Including 18.67 in taxes</span>
                                </td>
                                <td className="second">
                                    <tr>subprice</tr>
                                    <tr>free</tr>
                                    <tr>total</tr>
                        
                                </td>
                            </table>
                        </div>
                    </div>
                    <div className="left">
                        <h4>Express checkout</h4>
                        <div className="payment">
                            <button>shopPay</button>
                            <button>PayPal</button>
                            <button>GooglePay</button>
                        </div>
                        <h4>OR</h4>
                        <form action="">
                            <div className="title">
                                <label htmlFor="">Contact</label>
                                <p>Have an account</p>
                                <Link to="/logIn">Log in</Link>
                            </div>
                            <input type="email" name="" id="" placeholder='Email'/>
                            <input type="checkbox" name="" id="" /> 
                            <span>Email me with news and offers</span>
                            <div className="delivery">
                                <label htmlFor="selectBox">Delivery</label>
                                <select id="selectBox" >
                                    <option value="option1">Ship</option>
                                    <option value="option2">Pick up</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut