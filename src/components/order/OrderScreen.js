import React, {useEffect, useState} from "react";
import "./OrderScreen.css"

import OrderCard from "./OrderCard";
import NavigationBar from "../nav-bar/NavigationBar";

const OrderScreen = ({foods}) => {

    const foodDictionary = new Map();

    //Maps out foods by categories
    const foodHandler = (key, value) => {
        if(!foodDictionary.has(key)){
            foodDictionary.set(key, [value])
        }else{
            foodDictionary.set(key, [...foodDictionary.get(key), value])
        }
        console.log(foodDictionary)

    }

    return(
        <div className="order-screen-container">
            {foods.map((food)=>(
                <div className="food-preview" key={foods.storeId}>
                    {foodHandler(food.cat, food)}
                    <OrderCard food={food}></OrderCard>
                </div>
            ))}

        </div>
    )
}

export default OrderScreen;