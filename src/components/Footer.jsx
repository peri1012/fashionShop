import { Link } from "react-router-dom";
import {FaArrowRight,  FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import foot1 from '../assets/images/foot1.png';
import foot2 from '../assets/images/foot2.png';
import foot3 from '../assets/images/foot3.png';
import foot4 from '../assets/images/foot4.png';
import foot5 from '../assets/images/foot5.png';
import foot6 from '../assets/images/foot6.png';
import foot7 from '../assets/images/foot7.png';
import foot8 from '../assets/images/foot8.png';
import foot9 from '../assets/images/foot9.png';
import foot10 from '../assets/images/foot10.png';
import foot11 from '../assets/images/foot11.png';
const Footer = () => {
  return (
    <footer>
        < div className="container">
        <div className="row">
            <div className="footer-top">
                <div className="footer-part">
                    <h4>Quick links</h4>
                    <ul>
                        <li><Link to="/">Accessories</Link></li>
                        <li><Link to="/">Bags</Link></li>
                        <li><Link to="/">Dresses</Link></li>
                        <li><Link to="/">Essentials</Link></li>
                        <li><Link to="/">Footwear</Link></li>
                        <li><Link to="/">Fragrance</Link></li>
                        <li><Link to="/">Jackets</Link></li>
                        <li><Link to="/">Jeans</Link></li>
                        <li><Link to="/">Jewellery</Link></li>
                        <li><Link to="/">Knitwear</Link></li>
                        <li><Link to="/">Linen</Link></li>
                        <li><Link to="/">Plus Size</Link></li>
                        <li><Link to="/">Purses</Link></li>
                        <li><Link to="/">SALE</Link></li>
                        <li><Link to="/">Scarves</Link></li>
                        <li><Link to="/">Socks</Link></li>
                        <li><Link to="/">Tops</Link></li>
                        <li><Link to="/">Trousers</Link></li>
                    </ul>
                </div>
                <div className="footer-part">
                    <h4>Info</h4>
                    <ul>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Shipping Policies</Link></li>
                        <li><Link to="/">Refund Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-part">
                    <h4>Our mission</h4>
                    <p>Our aim is to offer good quality clothing and products at an afforable cost with the emphasis on providing excellent customer service honestly with the upmost integrity. Evolving to fit changing modern times.</p>
                </div>
            </div>
            <div className="footer-middle">
                <h3 className="heading">Subscribe to our emails</h3>
                <div className="media">
                    <form>
                        <input type="email" name="email" placeholder="Email"/>
                        <button className="btn">
                            <i className="icon"><FaArrowRight/></i>
                        </button>
                    </form>
                    <div className="social-medias">
                        <FaFacebookSquare /> <FaInstagram /> 
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="payment-cards">
                    <div className="pay-item">
                        <img src={foot1} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot2} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot3} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot4} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot5} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot6} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot7} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot8} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot9} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot10} alt="foot1" />
                    </div>
                    <div className="pay-item">
                        <img src={foot11} alt="foot1" />
                    </div>
                </div>
                <p>
                    ©2023, 
                    <Link to="/">The Fashion Shop</Link> 
                    <Link to="/">Powered by Shopify </Link>
                </p>
            </div>
        </div>
    </div>

    </footer>
  )
}

export default Footer;
