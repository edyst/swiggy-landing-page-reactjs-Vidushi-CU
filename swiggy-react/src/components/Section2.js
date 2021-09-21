import React from 'react'
import Feature1 from '../images/feature1.png';
import Feature2 from '../images/feature2.png';
import Feature3 from '../images/feature3.png';

export default function Section2() {
    return (
        <div className="section2">
            <div className="flex-row section2-main">
            <div className="section2-sub" style={{ marginRight:"150px", marginLeft:"50px"}}>
                <img src={Feature1} style={{ width:"50%", height:"60%"}}/>
                <p className="head-2">No Minimum Order</p>
                <p className="sub-head-2">Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
            <div className="section2-sub" style={{ marginRight:"150px"}}>
                <img src={Feature2} style={{ width:"50%", height:"60%"}}/>
                <p className="head-2">Live order Tracking</p>
                <p className="sub-head-2">Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
            <div classNameName="section2-sub" style={{ marginLeft:"50px"}}>>
                <img src={Feature3} style={{ width:"40%", height:"60%"}} />
                <p className="head-2">Lightning-fast Delivery</p>
                <p className="sub-head-2">Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
        </div>
        </div>
    )
}
