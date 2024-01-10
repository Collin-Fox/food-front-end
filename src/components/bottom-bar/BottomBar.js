import React from "react";
import "./BottomBar.css"
import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai"
const BottomBar = () =>{
    return(
        <div className="bottom-container">


            <h2>
                Follow Us on Social Media!
                <AiFillInstagram fill="white"/>
                <AiFillTwitterSquare fill="white"/>
                <AiFillFacebook fill="white"/>
            </h2>


        </div>
    )
}

export default BottomBar