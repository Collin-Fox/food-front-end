import React from "react";
import "./FoodList.css"
const FoodList = ({foods}) =>{
    console.log(foods)

    return(
        <div className="list-container">
            {foods.map((food)=>(
                <div className="food-preview" key={foods.storeId}>
                    <h2>{food.name}</h2>
                    <h4>{food.price}</h4>
                </div>
            ))}
            <div className="food-image-container">
                Hello World
            </div>
        </div>
    )
}

export default FoodList