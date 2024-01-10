import React from "react";
import {Button} from "@mui/material";
import "./NavigationBar.css"
import {Link} from "react-router-dom"

const NavigationBar = () =>{
    return(
        <div className="nav-container">

                <Link  to="/">Home</Link>
                <Link  to="/Menu">Menu</Link>
                <Link to="/Drinks">Drinks</Link>
                <Link to="/Order">Order</Link>
                <Link to="/Reservations">Reservations</Link>

        </div>

    )
}

export default NavigationBar;