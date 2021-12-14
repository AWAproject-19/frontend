import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './Products.module.css';

const Products = () => {
const cart = useSelector((state) => state);
console.log(cart);
const dispatch = useDispatch();

  
  return (
    
    <div>
    <div className={styles.productContainer}>
    <div className={styles.navigation}>

    <img src="/images/logo.png"alt="" style={{height:50, marginTop: -22 , marginLeft: -38}}/>
    <Link to="/Home" style={{marginLeft: 1252, color: 'white', padding: 2, marginRight: -59}}> Home </Link>
    <Link to="/Products" style={{ color: 'white', padding: 2}}> Menut </Link>

        <p>
        </p> 
        <Link to="/cart">
        < img src="/images/cart.png" alt="" />
        </Link>

      </div>
      
      <div className={styles.products}>
      
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className={styles.product} key={item.id}>
              <h2>{item.restaurant}</h2>
              <img src={` ../images/${item.image}`} alt="cart" />
              <h4>{item.name}</h4>
              <p> {item.price} € </p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
              
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Products;
