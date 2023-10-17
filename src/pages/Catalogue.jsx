import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import {FaChevronRight, FaChevronDown} from 'react-icons/fa';
import axios from "axios";
import { useEffect,useState } from "react";

function Catalogue() {
  const[data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    await axios.get('http://localhost:5000/thefashionshop/products')
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    
  };

  return (
    <>
    <Header/>
    <main>
      <section className="catalogue">
        <div className="container">
          <div className="row">
            <div className="content">    
              <div className="heading">
                <h2>All Items</h2>
              </div>
              <div className="catalogue-menu">
                <div className="menu-left">
                  <span>Filter:</span>
                  <span>Availability<FaChevronDown/></span>
                  <span>Price<FaChevronDown/></span>
                </div>
                <div className="menu-right">
                  <span>Sort by:</span>
                  <span>Date, new to old<FaChevronDown/></span>
                  <span><span className="quantity">1643</span>products</span>
                </div>
              </div>
              <div className="cards">
                {
                  data.map(item=>(
                    <div className="card-box" key={item.id}  style={{ border: '1px solid green' }}>
                    <Card data={item}/>
                    <button className="button">Add to cart</button>
                    </div>

                  ))
                }
                
              </div>
              <div className="navigation">
                <div className="box">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>...</span>
                  <span>83</span>
                  <span><FaChevronRight className='icon'/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default Catalogue;

