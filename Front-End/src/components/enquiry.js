import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../index.css';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';


//Function for Enquiry Details

export function Enquirydetails() {
    const Navigate = useNavigate()

    const [array, setarray] = useState({ Product: [] })

    // using useEffect hooks to load data on page load

    useEffect(
        () => {
            result();
        }, [])

    var result = async () => {
        var response = await axios.get('http://localhost:3000/product/getcontactusdetails')
        setarray({ Product: response.data })
    }

    // Delete function used to delete datas from database on clicking Remove from cart

    const Delete = async (_id) => {

        //Deleting data from table

        var result = window.confirm("Are you sure to delete?");
        if (result) {
            var response = await axios.delete(`http://localhost:3000/product/deleteenquiry/${_id}`)
            var Product = array.Product.filter((row) => row._id !== _id)
            setarray({ Product })
        }
    }

    return (
        <>

            {/* Admin Page Button */}

            <section>
                <div class="container-fluid">
                    <div class="row mt-3">
                        <div class="col-12 text-end">
                            <button class="btn btn-outline-secondary" onClick={() => Navigate('/admin')} >  Admin Page </button>
                        </div>
                    </div>

                    {/* Top Gird */}

                    <div class="row mt-3">
                        <div class="col-12">
                            <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                    <Toolbar style={{ height: "12vw" }} className="color">
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                            <div style={{ fontSize: "5vw", fontWeight: "bold" }}>
                                                Customer Enquiry Details
                                            </div>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </div>
                    </div>
                    <br></br>

                    {/* Table */}

                    <div class="row mt-2">
                        <div class="col-12 table-responsive text-center">
                            <Table striped bordered hover variant="primary" border='1'>
                                <thead>
                                    <tr>
                                        <td> Customer Name </td>
                                        <td> Customer Contact no. </td>
                                        <td> Product Name for Enquiry </td>
                                        <td> Action </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {array.Product.map((row) => (
                                        <tr key={row.id}>
                                            <td> {row.customername} </td>
                                            <td> {row.customercontactno} </td>
                                            <td> {row.productname} </td>
                                            <td> <button class="btn btn-primary" onClick={() => Delete(row._id)} >Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}