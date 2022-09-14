import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRupeeSign } from 'react-icons/fa';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../auth";


// Function used for Dashboard Page

export function Dashboard() {

    const Navigate = useNavigate();

    // to store datas array used

    const [array, setarray] = useState({ Product: [] })

    const [user, setuser] = useState("")

    const auth = useAuth();

    // to store cartvalue  

    const [cartvalue, setcartvalue] = useState(0)

    // to disable add to cart button on click

    const [disable1, setDisable1] = React.useState(false);
    const [disable2, setDisable2] = React.useState(false)
    const [disable3, setDisable3] = React.useState(false)
    const [disable4, setDisable4] = React.useState(false)
    const [disable5, setDisable5] = React.useState(false)
    const [disable6, setDisable6] = React.useState(false)

    // using useEffect to get data on page load

    useEffect(
        () => {
            username();
        }, [])


    var username = async () => {
        var response = await axios.post('http://localhost:3000/product/getusername', {
            email: auth.user
        })
        setuser(response.data.first_name)
    }

    useEffect(
        () => {
            cartcount();
        }, [])


    var cartcount = async () => {
        var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
        var res = response.data.map((row) => {
            setcartvalue(row.Totalcount)
        })
    }

    // below function used for posting datas during Add to cart button pressed

    const IncreaseValue = async (e) => {

        // If atomos's Add to cart button clicked following if condition take place

        if (e.target.name === 'Atomos') {

            // Posting datas on database

            var post = await axios.post('http://localhost:3000/product/post', {
                ProductName: "Shogun Monitor",
                Productcompany: "Atomos",
                Productprice: 50000,
                Quantity: "",
                Hours: "",
                TotalAMount: ""
            })

            // Pushing fetched data to Product Array

            var Product = [...array.Product];
            Product.push(post.data);
            setarray({ Product });

            // to make add to cart button disable

            setDisable1(true)

            // to get posted data count and pushing it to cartvalue 

            var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
            var res = response.data.map((row) => {
                setcartvalue(row.Totalcount)
            })
        }

        // If light's Add to cart button clicked following if condition take place

        else if (e.target.name === 'light') {

            // Posting datas on database

            var post = await axios.post('http://localhost:3000/product/post', {
                ProductName: "Baby Light",
                Productcompany: "Canon",
                Productprice: 5000,
                Quantity: "",
                Hours: "",
                TotalAMount: ""
            })

            // Pushing fetched data to Product Array

            var Product = [...array.Product];
            Product.push(post.data);
            setarray({ Product });

            // to make add to cart button disable

            setDisable2(true)

            // to get posted data count and pushing it to cartvalue

            var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
            var res = response.data.map((row) => {
                setcartvalue(row.Totalcount)
            })

        }

        // If stand's Add to cart button clicked following if condition take place

        else if (e.target.name === 'stand') {

            // Posting datas on database

            var post = await axios.post('http://localhost:3000/product/post', {
                ProductName: "Backdrop Stand",
                Productcompany: "Epson",
                Productprice: 10000,
                Quantity: "",
                Hours: "",
                TotalAMount: ""
            })

            // Pushing fetched data to Product Array

            var Product = [...array.Product];
            Product.push(post.data);
            setarray({ Product });

            // to make add to cart button disable

            setDisable3(true)

            // to get posted data count and pushing it to cartvalue

            var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
            var res = response.data.map((row) => {
                setcartvalue(row.Totalcount)
            })
        }

        // If monopad's Add to cart button clicked following if condition take place

        else if (e.target.name === 'monopad') {

            // Posting datas on database

            var post = await axios.post('http://localhost:3000/product/post', {
                ProductName: "Monopad",
                Productcompany: "Benro",
                Productprice: 2000,
                Quantity: "",
                Hours: "",
                TotalAMount: "",
                FromDate: "",
                ToDate: "",
            })

            // Pushing fetched data to Product Array

            var Product = [...array.Product];
            Product.push(post.data);
            setarray({ Product });

            // to make add to cart button disable

            setDisable4(true)

            // to get posted data count and pushing it to cartvalue

            var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
            var res = response.data.map((row) => {
                setcartvalue(row.Totalcount)
            })

        }

        // If tripod's Add to cart button clicked following if condition take place

        else if (e.target.name === 'tripod') {

            // Posting datas on database

            var post = await axios.post('http://localhost:3000/product/post', {
                ProductName: "Tripod",
                Productcompany: "Benro",
                Productprice: 5000,
                Quantity: "",
                Hours: "",
                TotalAMount: ""
            })

            // Pushing fetched data to Product Array

            var Product = [...array.Product];
            Product.push(post.data);
            setarray({ Product });

            // to make add to cart button disable

            setDisable5(true)

            // to get posted data count and pushing it to cartvalue

            var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
            var res = response.data.map((row) => {
                setcartvalue(row.Totalcount)
            })
        }

        // If camera's Add to cart button clicked following if condition take place

        else if (e.target.name === 'camera') {

            // Posting datas on database

            var post = await axios.post('http://localhost:3000/product/post', {
                ProductName: "Camera",
                Productcompany: "canon",
                Productprice: 45000,
                Quantity: "",
                Hours: "",
                TotalAMount: ""
            })

            // Pushing fetched data to Product Array

            var Product = [...array.Product];
            Product.push(post.data);
            setarray({ Product });

            // to make add to cart button disable

            setDisable6(true)

            // to get posted data count and pushing it to cartvalue

            var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
            var res = response.data.map((row) => {
                setcartvalue(row.Totalcount)
            })
        }

        // to move to top of page after clicking Add to Cart Button 

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>

            {/* contact us button */}

            <section>
                <div class="container-fluid">
                    <div class="row mt-3">

                        <div class="col-lg-3 col-md-3 col-sm-12 text-center align-self-center">
                            <span style={{ fontSize: "30px", fontWeight: "bold" }}>Welcome {user}</span>
                        </div>

                        <div class="col-lg-2 col-md-3 col-sm-12 mt-3 mt-lg-0 mt-md-0 mt-sm-3 offset-lg-3 text-lg-end text-center">
                            <button class="btn btn-outline-secondary" onClick={() => Navigate('/contactus')} >  Contact Us </button>
                        </div>

                        {/* cart button */}

                        <div class="col-lg-2 col-md-3 col-sm-12 text-center text-lg-center mt-3 mt-lg-0 mt-md-0 mt-sm-3">
                            <button id="cartbtn" class="btn btn-outline-secondary" size="sl" startIcon={<DeleteIcon />}
                                onClick={() => Navigate('/Cart')}>
                                <FontAwesomeIcon icon={faShoppingCart} /> Cart <span id="cv" className="Cnum">{cartvalue}</span>
                            </button>
                        </div>

                        {/* Log Out button */}

                        <div class="col-lg-2 col-md-3 col-sm-12 text-center text-lg-start mt-3 mt-lg-0 mt-md-0 mt-sm-3">
                            <button class="btn btn-outline-secondary" onClick={() => Navigate('/')} >  Log Out </button>
                        </div>
                    </div>
                    <br></br>

                    {/* Top Grid */}

                    <div class="row">
                        <div class="col-12">
                            <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                    <Toolbar style={{ height: "12vw" }} className="color">
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                            <div style={{ fontSize: "5vw", fontWeight: "bold" }}>
                                                Products For Rental<br></br>
                                            </div>
                                            <div style={{ fontSize: "1.5vw" }}>
                                                Don't need to buy a product anymore JUST Rent It !!!!
                                            </div>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </div>
                    </div>
                    <br></br>

                    {/* product cards */}

                    {/* Atomos Shogun Monitor card */}

                    <div class="row ">
                        <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-3 d-flex justify-content-center">
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="monitor.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <div className="fontstyle3">
                                        Atomos Shogun Monitor
                                    </div>
                                    <div className="fontstyle4">
                                        <span>7 hours</span> <FaRupeeSign /> 1500
                                    </div><br></br>
                                    <div className="Button">
                                        <button onClick={(e) => IncreaseValue(e)} id='B1' name="Atomos" disabled={disable1} class="btn btn-outline-secondary"  >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Baby light card */}

                        <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-3 d-flex justify-content-center">
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="light.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <div className="fontstyle3">
                                        Baby light
                                    </div>
                                    <div className="fontstyle4">
                                        <span>7 Hours</span> <FaRupeeSign /> 500
                                    </div><br></br>
                                    <div className="Button">
                                        <button onClick={(e) => IncreaseValue(e)} id='B1' name="light" disabled={disable2} class="btn btn-outline-secondary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Backdrop Stand card */}

                        <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-3 d-flex justify-content-center">
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="stand.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <div className="fontstyle3">
                                        Backdrop Stand
                                    </div>
                                    <div className="fontstyle4">
                                        7 Hours - <FaRupeeSign /> 500
                                    </div><br></br>
                                    <div className="Button">
                                        <button onClick={(e) => IncreaseValue(e)} id='B1' name="stand" disabled={disable3} class="btn btn-outline-secondary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>

                    {/*  Benro Monopad card */}

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-3 d-flex justify-content-center">
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="monopad.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <div className="fontstyle3">
                                        Benro Monopad
                                    </div>
                                    <div className="fontstyle4">
                                        <span>7 hours</span> <FaRupeeSign /> 150
                                    </div><br></br>
                                    <div className="Button">
                                        <button onClick={(e) => IncreaseValue(e)} id='B1' name="monopad" disabled={disable4} class="btn btn-outline-secondary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Benro Photo Tripod card */}

                        <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-3 d-flex justify-content-center">
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="benro tripod.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <div className="fontstyle3">
                                        Benro Photo Tripod
                                    </div>
                                    <div className="fontstyle4">
                                        <span>7 hours</span> <FaRupeeSign /> 300
                                    </div><br></br>
                                    <div className="Button">
                                        <button onClick={(e) => IncreaseValue(e)} id='B1' name="tripod" disabled={disable5} class="btn btn-outline-secondary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*   Camera card */}

                        <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-3 d-flex justify-content-center">
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="camera.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <div className="fontstyle3">
                                        Camera
                                    </div>
                                    <div className="fontstyle4">
                                        7 Hours - <FaRupeeSign /> 2000
                                    </div><br></br>
                                    <div className="Button">
                                        <button onClick={(e) => IncreaseValue(e)} id='B1' name="camera" disabled={disable6} class="btn btn-outline-secondary">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>

                {/* Bottom Grid */}

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar style={{ height: "12vw" }} className="color">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                <div className="fontstyle2">
                                    Copyright © Product Rental Website 2022
                                </div>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </section>
        </>
    );
}