import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./components/login";
import { Admin } from "./components/admin";
import { Enquirydetails } from "./components/enquiry";
import { Razorpay } from "./components/Razorpay";
import { Dashboard } from "./components/Dashboard";
import { Cart } from "./components/cart";
import { Contactus } from "./components/contactus";
import { Register } from "./components/Register";
import { Adminlogin } from "./components/Adminlogin";
import { Userlogin } from "./components/userlogin";
import { Forgotpassword } from "./components/forgotpassword";
import { RequireAuth } from "./RequiredAuth";
import { AuthProvider } from "./auth";


export default function App() {
  return (

    // Router used for navigation through pages

    <div>
      < AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userlogin" element={<Userlogin />} />
            <Route path="/forgotpass" element={<Forgotpassword />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/Cart" element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path="/contactus" element={<RequireAuth><Contactus /></RequireAuth>} />
            <Route path="/Enquirydetails" element={<RequireAuth><Enquirydetails /></RequireAuth>} />
            <Route path="/razorpay" element={<RequireAuth><Razorpay /></RequireAuth>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}



















