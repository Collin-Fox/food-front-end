import React from "react";
import "./FoodList.css"
import FoodCard from "./FoodCard";
const FoodList = ({foods}) =>{
    console.log(foods)

    return(
        <div className="list-container">
            {foods.map((food)=>(
                <div className="food-preview" key={foods.storeId}>
                    <FoodCard food={food}></FoodCard>
                </div>
            ))}

        </div>

    )
}

export default FoodList