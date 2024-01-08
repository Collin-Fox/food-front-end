import React from "react";
import NavigationBar from "../nav-bar/NavigationBar";
import FoodList from "../food-list/FoodList";
import BottomBar from "../bottom-bar/BottomBar";
import "./Menu.css"
import Player from "../video-player/Player";
const Menu = ({foods}) => {
    return(
        <div>
            <NavigationBar/>
            <div className="center-page">
                <FoodList foods={foods}/>

            </div>

            <BottomBar/>

        </div>
    )
}

export default Menu
