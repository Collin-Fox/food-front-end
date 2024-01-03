import React from "react";
import NavigationBar from "../nav-bar/NavigationBar";
import FoodList from "../food-list/FoodList";
import BottomBar from "../bottom-bar/BottomBar";

const Menu = ({foods}) => {
    return(
        <div>
            <NavigationBar/>
            <FoodList foods={foods}/>
            <BottomBar/>
        </div>
    )
}

export default Menu
