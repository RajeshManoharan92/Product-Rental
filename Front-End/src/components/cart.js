import React, { useState, useEffect, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../index.css';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';


// Function used for cart page

export function Cart() {

    // calling navigation function for navigation purpose

    const Navigate = useNavigate();

    // array to store fetched datas

    const [array, setarray] = useState({ Product: [] })

    var ele1 = useRef()
    var ele2 = useRef()
    var ele3 = useRef()

    // array to store form values

    const [formvalue, setformvalue] = useState({
        Quantity: "",
        FromDate: "",
        ToDate: "",
        _id: ''
    })

    // initially to disable checkout button to avoid user to navigate payement untill fill datas 

    const [disablechkout, setdisablechkout] = useState(true)

    // using useEffect to load datas on page load

    useEffect(
        () => {
            res();
        }, [])

    const res = async () => {
        var response = await axios.get('http://localhost:3000/product/get');
        setarray({ Product: response.data })
    }

    // validate functions used by formik for validation & error throwing purpose

    const validate = (formData) => {
        var errors = {};
        if (formData.Quantity == '') errors.Quantity = 'Quantity is Required';
        if (formData.FromDate == '') errors.FromDate = 'From Date is Required';
        if (formData.ToDate == '') errors.ToDate = 'To Date is Required';
        return errors;
    };

    // function used for updating datas to database on Add/Edit Button click

    const Update = async (_id) => {

        //getting values from textfield to update

        var valQ = ele1.current.value
        var FDate = ele2.current.value
        var TDate = ele3.current.value

        console.log(FDate,TDate)

        // if textfield is empty on Add/Edit Button click following if condtion work & through alert to user to fill the datas

        if (!FDate, !TDate, !valQ) {
            alert('Please Enter Quantity & Date Details, After entering click Add/Edit Button To Add')
        }

        // if user entered data on text field and by clicking Add/Edit button following else condtion works to update data on database

        else {

            //filtering datas to get datas on which row user click Add/Edit button -

            var selectedData = await array.Product.filter((row) => row._id == _id)[0]

            //Update

            var response = await axios.put(`http://localhost:3000/product/update/${_id}`,
                {
                   
                    Productcompany: selectedData.Productcompany,
                    Productprice: selectedData.Productprice,
                    Quantity: valQ,
                    TotalAMount: valQ * selectedData.Productprice,
                    FromDate: FDate,
                    ToDate: TDate,
                })

            var response = await axios.get('http://localhost:3000/product/get')
            await setarray({ Product: response.data })
            setformvalue({  Quantity: '', FromDate: "", ToDate: "" })
        }
    }

    // Delete function used to delete datas from database on clicking Remove from cart

    const Delete = async (_id) => {
        //Deleting data from table

        var result = window.confirm("Are you sure to Remove?");
        if (result) {
            var response = await axios.delete(`http://localhost:3000/product/delete/${_id}`)
            var Product = array.Product.filter((row) => row._id !== _id)
            setarray({ Product })

            if (response) {
                alert("Product Removed")
            }
        }
    }

    // following funcitons used to setform values 

    const quantity = (e) => {

        // to activate disabled checkout button 

        setdisablechkout(false)
    }

    // formik submit function

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <>

            {/* Home Button */}

            <section>
                <div class="container-fluid">
                    <div class="row mt-3">
                        <div class="col-12 text-end">
                            <button class="btn btn-outline-secondary" onClick={() => Navigate('/dashboard')} >  Dashboard </button>
                        </div>
                    </div>

                    {/* Top Grid */}

                    <div class="row mt-3">
                        <div class="col-12">
                            <Box sx={{ flexGrow: 1 }}>
                                <AppBar position="static">
                                    <Toolbar style={{ height: "12vw" }} className="color">
                                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                                            <div style={{ fontSize: "5vw", fontWeight: "bold" }}>
                                                Check Out Page
                                            </div>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                        </div>
                    </div>
                    <br></br>

                    {/* Formik */}

                    <Formik
                        enableReinitialize
                        initialValues={formvalue}
                        validate={(formData) => validate(formData)}
                        onSubmit={(formData) => submit(formData)}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }) => (
                            <form className='form' onSubmit={handleSubmit}>

                                {/* Quantity text field */}

                                <div class="row mt-1">
                                    <div class="col-12 text-center">
                                        <div >
                                            <label>Quantity<span style={{ color: 'red' }}>*</span></label> &nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className='input1' style={{ display: 'inline-block' }}>
                                                <div>
                                                    <input placeholder="Please enter Quantity" ref={ele1} type="text" onClick={(e) => quantity(e)}
                                                        name="Quantity"
                                                        value={values.Quantity}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className='ctextQ' />
                                                </div>
                                            </div>
                                            <div class="row mt-1 errorrowht">
                                                <div className=' col-12 text-center align-self-center' style={{ color: 'red' }}>
                                                    <span className='span' style={{ color: 'red' }}>
                                                        {touched.Quantity && errors.Quantity}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>

                                {/* From Date */}

                                <div class="row mt-1">
                                    <div class="col-12 text-center">
                                        <div>
                                            <label>From Date<span style={{ color: 'red' }}>*</span></label> &nbsp;
                                            <div className='input2' style={{ display: 'inline-block' }}>
                                                <div>
                                                    <input placeholder="Please enter FromDate" ref={ele2} type="datetime-local"
                                                        name="FromDate"
                                                        value={values.FromDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className='cinputFrom' />
                                                </div>
                                            </div>
                                            <div class="row mt-1 errorrowht">
                                                <div className=' col-12 text-center align-self-center' style={{ color: 'red' }}>
                                                    <span className='span' style={{ color: 'red' }}>
                                                        {touched.FromDate && errors.FromDate}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>

                                {/* To Date */}

                                <div class="row mt-1">
                                    <div class="col-12 text-center">
                                        <div>
                                            <label>To Date<span style={{ color: 'red' }}>*</span></label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div className='input3' style={{ display: 'inline-block' }}>
                                                <div>
                                                    <input placeholder="Please enter ToDate" ref={ele3} type="datetime-local"
                                                        name="ToDate"
                                                        value={values.ToDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className='cinputTo' />
                                                </div>
                                            </div>
                                            <div class="row mt-1 errorrowht">
                                                <div className=' col-12 text-center align-self-center' style={{ color: 'red' }}>
                                                    <span className='span' style={{ color: 'red' }}>
                                                        {touched.ToDate && errors.ToDate}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                            </form>
                        )}
                    </Formik>

                    <div class="row mt-3">
                        <div class="col-12 text-center">
                            <p className="p"><span style={{ color: 'red' }}>*</span> Please Enter Quantity & Date, After Click Add/Edit Button in Table To Add Data</p>
                        </div>
                    </div>

                    {/* Table */}

                    <div class="row">
                        <div class="col-12 table-responsive text-center align-self-center">
                            <Table striped bordered hover variant="primary" border='1'>
                                <thead>
                                    <tr>
                                        <td> Product Name </td>
                                        <td> Product company </td>
                                        <td> Product price </td>
                                        <td> Quantity </td>
                                        <td>Total Amount</td>
                                        <td> From Date</td>
                                        <td> To Date</td>
                                        <td> Actions </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {array.Product.map((row) => (
                                        <tr key={row.id}>
                                            <td> {row.ProductName} </td>
                                            <td> {row.Productcompany} </td>
                                            <td> {row.Productprice} </td>
                                            <td> {row.Quantity}</td>
                                            <td>{row.TotalAMount}</td>
                                            <td>{row.FromDate}</td>
                                            <td>{row.ToDate}</td>
                                            <td> <button class="btn btn-primary" onClick={() => Update(row._id)} >Add/Edit Date & Quantity</button> &nbsp; &nbsp; &nbsp;
                                                <button class="btn btn-primary" onClick={() => Delete(row._id)} >Remove From Cart</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div class="row mt-3 mb-4">
                        <div class="col-12 text-center">
                            <button id="rzp-button1" disabled={disablechkout} onClick={() => Navigate('/razorpay')} class="btn btn-outline-secondary" >CheckOut</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}