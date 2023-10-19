import {Link} from 'react-router-dom';
import Card from './Card';
import axios from "axios";
import { useEffect,useState } from "react";
function ShopHome() {
    const[data,setData]=useState([])
    useEffect(()=>{
      getData()
    },[])
    const getData=async()=>{
      await axios.get(process.env.REACT_APP_ALL_PRODUCTS)
      .then((res)=>{
        setData(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
      
    };
  return (
    <section className="shop-home">
        <div className="container">
            <div className="row">
                <div className="first-part">
                    <div className="heading">
                        <p>Welcome to The Fashion Shop</p>
                    </div>
                    <div className="info">
                        <p>We’re proud to have 45 years experience and we love our customers as much as we do our fashion. Over the years we’ve established our store as a provider of high quality ladies wear, bringing affordable fashion to women with a focus on excellent service.</p>
                    </div>
                </div>
                <div className="second-part">
                    <div className="heading">
                        <p>Featured products</p>
                    </div>
                    <div className="cards">
                    {
                        data.map(item=>(
                            <Card data={item}/>
                        ))
                    }
                    </div>
                    <div className="btn">
                        <Link to="/catalogue" className="button">View all</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShopHome;

