import React from "react";
import "./OrderScreen.css"

import OrderCard from "./OrderCard";
const OrderScreen = ({foods}) => {
    return(
        <div className="order-screen-container">
            {foods.map((food)=>(
                <div className="food-preview" key={foods.storeId}>
                    <OrderCard food={food}></OrderCard>
                </div>
            ))}
        </div>
    )
}

export default OrderScreen;