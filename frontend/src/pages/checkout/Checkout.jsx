import React, { useState, useEffect } from 'react'
import "./Checkout.css"
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Loading from '../../components/loading/Loading'

import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';



const Checkout = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const productId = useParams().productId

    // const fetchProduct = async () => {
    //     setLoading(true)
    //     const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    //     if (!response.ok)
    //         navigate("/error")
    //     const data = await response.json()
    //     setProduct(data)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchProduct()
    // }, [productId])


    const cartItems = useSelector((state) => state.cart.items);
    let totalSum = 0;
    const calculateTotalSum = () => {
        
        cartItems.forEach((item) => {
            totalSum += item.totalPrice;
        });
        return totalSum;
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="py-3 py-md-4 checkout" >
                <div className="container">
                    <h4>Checkout</h4>
                    <hr />

                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="shadow bg-white p-3">
                                <h4 className="text-primary">
                                    Item Total Amount :
                                    <span className="float-end">${calculateTotalSum().toFixed(2)}</span>
                                </h4>
                                <hr />
                                <small>* Items will be delivered in 3 - 5 days.</small>
                                <br />
                                <small>* Tax and other charges are included.</small>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="shadow bg-white p-3">
                                <h4 className="text-primary">
                                    Basic Information
                                </h4>
                                <hr />

                                <form action="" method="POST">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>Full Name</label>
                                            <input type="text" name="fullname" className="form-control" placeholder="Enter Full Name" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>Phone Number</label>
                                            <input type="number" name="phone" className="form-control" placeholder="Enter Phone Number" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>Email Address</label>
                                            <input type="email" name="email" className="form-control" placeholder="Enter Email Address" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>Pin-code (Zip-code)</label>
                                            <input type="number" name="pincode" className="form-control" placeholder="Enter Pin-code" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label>Full Address</label>
                                            <textarea name="address" className="form-control" rows="2"></textarea>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label>Payment Mode: </label>
                                            <div className="d-md-flex align-items-start">
                                                <div className="nav col-md-3 flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    
                                                    <button className="nav-link fw-bold" id="cashOnDeliveryTab-tab" data-bs-toggle="pill" data-bs-target="#cashOnDeliveryTab" type="button" role="tab" aria-controls="cashOnDeliveryTab" aria-selected="true" style={{display:'flex',alignItems:"center", justifyContent:"space-between", width:"180px"}} > <input type='radio' checked="checked" /><span>Cash on Delivery</span></button>
                                                    {/* <button className="nav-link fw-bold" id="onlinePayment-tab" data-bs-toggle="pill" data-bs-target="#onlinePayment" type="button" role="tab" aria-controls="onlinePayment" aria-selected="false">Online Payment</button> */}
                                                </div>
                                                <div className="tab-content col-md-9" id="v-pills-tabContent">
                                                    <div className="tab-pane fade" id="cashOnDeliveryTab" role="tabpanel" aria-labelledby="cashOnDeliveryTab-tab" tabIndex="0">
                                                        <h6>Cash on Delivery Mode</h6>
                                                        <hr />
                                                        <button type="button" className="btn btn-primary">Place Order (Cash on Delivery)</button>

                                                    </div>
                                                    {/* <div className="tab-pane fade" id="onlinePayment" role="tabpanel" aria-labelledby="onlinePayment-tab" tabIndex="0">
                                                        <h6>Online Payment Mode</h6>
                                                        <hr />
                                                        <button type="button" className="btn btn-warning">Pay Now (Online Payment)</button>
                                                    </div> */}
                                                   
                                                </div>

                                            </div>

                                        </div>
                                        <div style={{ marginLeft: "50%", width:'50%' }}>
                                                        <Button variant="contained" style={{ marginBottom: '30px', background: "#f94d00", color: 'white' }} onClick={() => {
                                                            navigate("/placed"); window.location.reload()
                                                        }}>Place Order</Button>
                                                    </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Checkout
