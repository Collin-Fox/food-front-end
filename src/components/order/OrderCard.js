import React, {useState} from "react";
import "./OrderCard.css"
import FoodCard from "../food-list/FoodCard";
const OrderCard = ({food}) => {


    const addItemHandler = () =>{
        console.log(food.name + " " + food.price);
    }

    return(
        <div className="order-card-container" onClick={addItemHandler}>
            <div className="text-container">
                <h4>
                    {food.name}
                </h4>
                <h6>
                    {food.price}
                </h6>
            </div>

            <img src={food.img}>
            </img>
        </div>

    )
}

export default OrderCard;