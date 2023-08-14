import React, { useState } from "react";
import { Link } from "react-router-dom";

export const useCartFunctions = () => {
  const [count, setCount] = useState(0);
  const [orders, setOrders] = useState([]);

  const addToCart = (img, price, title) => {
    setCount(count + 1);
    console.log(img, price, title, count);
     const cartItem = {
       title: title,
       img: img,
       count: count + 1,
     };
    const newOrders = [...orders, cartItem];
    setOrders(newOrders);
    console.log(orders);
  };

  return {
    count,
    addToCart,
    orders
  };
};

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card card-compact p-4 bg-base-100 shadow-xl">
      <div>
        <img className="rounded-xl h-60" src={img} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`checkout/${_id}`}>
          <button className="btn btn-primary">Add Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
