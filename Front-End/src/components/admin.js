import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';


// Function for Admin Page

export function Admin() {

    const Navigate = useNavigate()

    return (
        <>
            {/* Log Out Button */}

            <section>
                <div class="container-fluid ">
                    <div class="row mt-4">
                        <div class="col-12 text-end">
                            <button class="btn btn-outline-secondary" onClick={() => Navigate('/')} >  Log Out </button>
                        </div>
                    </div>

                    {/* Top Grid */}

                    <div class="row mt-4 ">
                        <div class="col-12">
                            <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                    <Toolbar style={{ height: "12vw" }} className="color">
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                            <div style={{ fontSize: "5vw", fontWeight: "bold" }}>
                                                Welcome Admin
                                            </div>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </div>
                    </div>

                    {/* Dashboard, Cart, Contact Us Details, Payement Page Buttons */}

                    <div class="row mt-5  text-center ">
                        <div class="col-lg-6 col-md-6 col-sm-12 ">
                            <button class="btn btn-info" onClick={() => Navigate("/dashboard")}  > Dashboard </button>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-sm-4 mt-4">
                            <button class="btn btn-info" onClick={() => Navigate("/cart")} > Cart </button>
                        </div>
                    </div><br></br>
                    <div class="row  mt-lg-5 mt-md-4 mt-sm-1 text-center">
                        <div class="col-lg-6 col-md-6 col-sm-12 ">
                            <button class="btn btn-info" onClick={() => Navigate("/Enquirydetails")} > Enquiry Details </button>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12  mt-lg-0 mt-md-0 mt-sm-4 mt-4">
                            <button class="btn btn-info" onClick={() => Navigate("/razorpay")} > Payement Page </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}