import React from "react";
import NavigationBar from "../nav-bar/NavigationBar";
import BottomBar from "../bottom-bar/BottomBar";
import OrderCard from "./OrderCard";
import OrderScreen from "./OrderScreen";
import api from "../api/axiosConfig"
import "./Order.css"
const Order = ({foods}) => {
    return(
        <div className="order">
            <NavigationBar/>

            <OrderScreen foods={foods}/>

            <BottomBar/>
        </div>
    )
}

export default Order