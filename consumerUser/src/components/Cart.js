import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from './Cart.module.css';

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className={styles.cartcontainer}>
      <Link to="/Products">
        <TiArrowBack />
      </Link>
      <div className={styles.cart}>
        {cart.map((item) => {
          return (
            <div className={styles.cartcad} key={item.id}>
              <div>
                <img src={` ../images/${item.image}`} alt="cart" />
                <h4>{item.name}</h4>
                <p> price: {item.price} € </p>
                <p>amount : {item.price * item.quantity} € </p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  remove
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>

              </div>
            </div>
          );
        })}
      </div>
      
      {total > 0 && <div className={styles.cartcad}> <h2 style={{ marginLeft: 50 }}> total: {total} €  </h2> <button style={{marginTop: 5, marginLeft: 1100}}> CONTINUE SHOPPING </button>
      <button style={{marginRight: 46 , marginTop: -2}}> BUY </button> </div> } 
    </div>
    
    
  );
};

export default Cart;
