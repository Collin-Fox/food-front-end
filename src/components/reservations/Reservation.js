import React from "react";
import NavigationBar from "../nav-bar/NavigationBar";
import BottomBar from "../bottom-bar/BottomBar";
import InputField from "../reservation-input/InputField";

const Reservation = () => {
    return (
        <div>
            <NavigationBar/>
            <InputField/>

            <BottomBar/>
        </div>
    )
}

export default Reservation