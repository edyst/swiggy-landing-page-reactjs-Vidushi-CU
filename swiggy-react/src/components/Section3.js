import React from 'react'
import applesimple from '../images/apple.png';
import playsimple from '../images/playstore.png';
import pocket1 from '../images/pocket1.png';
import pocket2 from '../images/pocket2.png';

export default function Section3() {
    return (
        <div classNameName="section3">
            <div className="section3-1">
            <div style={{float: "right", height:"50%", width:"50%"}}>
                <p className="head">Restaurants in your pocket</p>
                <p className="sub-head">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <div className="flex-row">
                    <img src={applesimple} width="200px" height="60px"/>
                    <img src={playsimple} width="200px" height="60px" style={{marginLeft: "20px"}}/>
                </div>
            </div>
        </div>
        <div style={{position:"relative",float: "right", width: "50%", display: "flex", height:"100%"}}>
            <img src={pocket1} height="500px" width="400px"/>
            <img src={pocket2} height="500px" width="400px" style={{position:"absolute", bottom:"0", right:"20%"}}/>
        </div>
        </div>
    )
}
