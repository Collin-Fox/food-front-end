import React from "react";
import "./FoodCard.css"

const FoodCard = ({food}) => {
    return (
        <div className="card-container">
            <div className="img-container">
                <img  src = {food.img} alt = ""></img>
            </div>
            <div className="txt-container">
                <h4>
                    {food.name}
                </h4>
                <h6>
                    {"$" + food.price}
                </h6>
            </div>




        </div>
    )
}

export default FoodCard