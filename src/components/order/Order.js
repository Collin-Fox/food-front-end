import React from "react";
import NavigationBar from "../nav-bar/NavigationBar";
import BottomBar from "../bottom-bar/BottomBar";
import OrderCard from "./OrderCard";
import OrderScreen from "./OrderScreen";

const Order = ({foods}) => {
    return(
        <div>
            <NavigationBar/>

            <OrderScreen foods={foods}/>

            <BottomBar/>
        </div>
    )
}

export default Order