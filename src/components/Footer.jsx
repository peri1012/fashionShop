import { Link } from "react-router-dom";
import {FaArrowRight,  FaFacebookSquare, FaInstagram} from 'react-icons/fa';

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
                        <button>
                            <i className="icon"><FaArrowRight/></i>
                        </button>
                    </form>
                    <div className="social-medias">
                        <FaFacebookSquare /> 
                        <FaInstagram /> 
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="payment-cards"></div>
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