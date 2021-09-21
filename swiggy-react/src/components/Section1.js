import React from 'react'
import Lunch from '../images/Lunch1.jpg';
import Swiggylogo from "../images/Swiggy.png";

export default function Section1() {
    return (
        <div className="section1">
            <div className="f-l w-60 input">
                <div className="">
                    {/* Navbar */}
                    <div className="navbar">
                        <img src={Swiggylogo} style={{width:"240px", height:"100%"}}/>
                        <div className="nav-btn">
                            <button className="login">Login</button>
                            <button className="signup">Sign up</button>
                        </div>
                    </div>
                    
                    <p className="head">Cooking gone wrong?</p>
                    <p className="sub-head">Order food from favourite restaurants near you.</p>
                    <div className="flex-row">
                        <div className="search-box">
                            <input type="text" className="search-input" placeholder="Enter your delivery location"/>
                            <button className="locate-me">Locate me</button>
                        </div>
                        <div className="search-btn">FIND FOOD</div>
                    </div>
                    <p className="sub-head">POPULAR CITIES IN INDIA</p>
                    <div className="flex-row">
                        <p className="city">Ahemdabad</p>
                        <p className="city">Benglore</p>
                        <p className="city">Chennai</p>
                        <p className="city">Delhi</p>
                        <p className="city">Gurgano</p>
                        <p className="city">Hydrabad</p>
                        <p className="city">Kolkata</p>
                        <p className="city">Mumbai</p>
                        
                        
                        
                    </div>

                </div>

            </div>
            <div className="f-r w-40">
                <img src={Lunch} style={{width:"100%" , height:"100%"}}/>
            </div>
        </div>
    )
}
