import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Service from "./Service";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about">AboutUs</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
            </li>
            </ul>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default NavBar;


