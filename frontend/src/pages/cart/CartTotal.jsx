import React from 'react';
import "./Cart.css"
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartTotal = () => {
    const cartItems = useSelector((state) => state.cart.items);
    let totalSum = 0;
    const calculateTotalSum = () => {
        
        cartItems.forEach((item) => {
            totalSum += item.totalPrice;
        });
        return totalSum;
    };

    const navigate = useNavigate()

    return (
        <>
        {cartItems.length >0 && <>
            <div className="cart-total">
                <h4>Total Sum:</h4>
                <p>${calculateTotalSum().toFixed(2)}</p>
            </div>
             <div style={{ marginLeft: "50%" }}>
                <Button variant="contained" style={{ marginBottom: '30px', background: "#f94d00", color: 'white' }} onClick={() => {
                    navigate("/checkout")}}>Proceed to Order</Button>
            </div>
            </>
            }
        </>
    );
};

export default CartTotal;
