import React from "react";
import "./BottomBar.css"
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai"
const BottomBar = () =>{
    return(
        <div className="bottom-container">


            <h3>
                Follow Us on Social Media!
            </h3>
            <h1>
                <AiFillInstagram fill="white"/>
            </h1>
            <h1>
                <AiFillTwitterSquare fill="white"/>
            </h1>
            <h1>
                <AiFillFacebook fill="white"/>
            </h1>


        </div>
    )
}

export default BottomBar