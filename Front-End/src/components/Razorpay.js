import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../index.css';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';




//Function used For payement

export function Razorpay() {

    const Navigate = useNavigate()
    const [array, setarray] = useState({ Product: [] })
    const [payarray, setpayarray] = useState({ Product: [] })
    const [cartvalue, setcartvalue] = useState(0)

    // using useEffect to load data on page load

    useEffect(
        () => {
            res();
        }, [])

    var res = async () => {
        var response = await axios.get('http://localhost:3000/product/get')
        setarray({ Product: response.data })
    }

    // using useEffect to ger product count on page load to store in cart button

    useEffect(
        () => {
            productcount();
        }, [])

    var productcount = async () => {
        var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
        var res = response.data.map((row) => {
            setcartvalue(row.Totalcount)
        })
    }

    // functions for razorpay source details

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    // functions for razorpay Payment page details

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const options = {
            key: "rzp_test_V7MeZu3JfFTyWS", // Enter the Key ID generated from the Dashboard
            amount: "10000",
            currency: "INR",
            name: "Rajesh Corp.",
            description: "Test Transaction",
            order_id: "order_KEd6RIC66WwpVK",
            handler: async function (response) {
                const data = {
                    //orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                alert("Payment Succesfull");
                alert("Your Order Placed Succesfully");
            },

            prefill: {
                name: "Rajesh Solutions",
                email: "RajeshSolutions@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            {/* Home Button */}

            <section>
                <div class="container-fluid">
                    <div class="row mt-3">
                        <div class="col-lg-2 col-md-6 col-sm-12 offset-lg-8 text-center text-lg-end text-md-center text-sm-center">
                            <button class="btn btn-outline-secondary" onClick={() => Navigate('/dashboard')} >  Dashboard </button>
                        </div>

                        {/* Cart Button */}

                        <div class="col-lg-2 col-md-6 col-sm-12 text-lg-start text-center text-md-center text-sm-center mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                            <button class="btn btn-outline-secondary" size="sl"
                                onClick={() => Navigate('/Cart')}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Cart <span id="cv" className="Cnum">{cartvalue}</span> </button>
                        </div>
                    </div>

                    {/* Top Grid */}

                    <div class="row mt-3">
                        <div class="col-12">
                            <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                    <Toolbar style={{ height: "12vw" }} className="color">
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                            <div style={{fontSize:"5vw",fontWeight:"bold"}}>
                                                Pay Through Razorpay...
                                            </div>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </div>
                    </div>

                    {/* Table */}

                    <div class="row mt-4">
                        <div class="col-12 table-responsive text-center">
                            <Table className=" striped bordered hover" variant="primary" border='1'>
                                <thead>
                                    <tr>
                                        <td> Product Name </td>
                                        <td> Product company </td>
                                        <td> Product price </td>
                                        <td> Quantity </td>
                                        <td> From Date </td>
                                        <td> To Date </td>
                                        <td>Total Amount</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {array.Product.map((row) => (
                                        <tr key={row.id}>
                                            <td> {row.ProductName} </td>
                                            <td> {row.Productcompany} </td>
                                            <td> {row.Productprice} </td>
                                            <td> {row.Quantity}</td>
                                            <td> {row.FromDate}</td>
                                            <td> {row.ToDate}</td>
                                            <td>{row.TotalAMount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div class="row mt-4" >
                        <div class="col-12 text-center">
                            <button class="btn btn-outline-success" onClick={displayRazorpay}>
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}