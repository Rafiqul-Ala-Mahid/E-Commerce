import React from 'react';
import { useCartFunctions } from '../Home/Services/ServiceCard';

const Carts = () => {
    const { orders } = useCartFunctions();
    console.log(orders);

    return (
        <div>
            <h1>carts{orders.length}</h1>
        </div>
    );
};

export default Carts;