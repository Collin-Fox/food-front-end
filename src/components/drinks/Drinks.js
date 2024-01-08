import React from "react";
import {Navbar} from "react-bootstrap";
import BottomBar from "../bottom-bar/BottomBar";
import NavigationBar from "../nav-bar/NavigationBar";

const Drinks = () =>{
    return (
        <div>
            <NavigationBar/>

            <BottomBar/>
        </div>
    )
}

export default Drinks;