import React from "react";
import {Button} from "@mui/material";
import "./NavigationBar.css"
import {Link} from "react-router-dom"

const NavigationBar = () =>{
    return(
        <div className="button-container">

            <h5>
                <Link to="/Menu">Menu</Link>
            </h5>
            <h5>
                <Link to="/Drinks">Drinks</Link>
            </h5>

            <h5>
                <Link to="/Order">Order</Link>
            </h5>
            <h5>
                <Link to="/Reservations">Reservations</Link>
            </h5>

        </div>

    )
}

export default NavigationBar;