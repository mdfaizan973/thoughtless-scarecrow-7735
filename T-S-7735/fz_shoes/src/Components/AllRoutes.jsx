import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "..//Pages/Home";
import About from "..//Pages/About";
import Brands from "..//Pages/Brands";
import Cartpage from "..//Pages/Cartpage";
import Kids_pro from "..//Pages/Kids_pro";
import Login from "..//Pages/Login";
import Signup from "..//Pages/Signup";
import Siingle_pro from "..//Pages/Siingle_pro";
import Womens_pro from "..//Pages/Womens_pro";
import Mens_Pro from "..//Pages/Mens_Pro";
import Blogs from "../Pages/Blogs";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/cartpage" element={<Cartpage />}></Route>
        <Route path="/kids_pro" element={<Kids_pro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/womens_pro" element={<Womens_pro />}></Route>
        <Route path="/mens_pro" element={<Mens_Pro />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/products_mens/:id" element={<Siingle_pro />}></Route>{" "}
        {/* this single page is for mens */}
      </Routes>
    </div>
  );
}
