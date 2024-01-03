import React from "react";
import "./Page.css"
import {Button} from "@mui/material";
const Page = () =>{
    return (
        <div className="about">
            <div className="about-container">
                <h1 className="about-us">
                    About Us
                </h1>
                <h4 className="owner-info">
                    From the owner, Yini Leal
                </h4>
                <p>
                    Our family-owned restaurant has been proudly serving homemade,
                    quality meals in this community since 2007. For 17 years,
                    our talented chefs have prepared time-honored recipes passed down through generations.
                    We strive to provide all guests with a warm, welcoming dining experience and excellent service.
                    It brings us joy to be a gathering place where people connect over satisfying homestyle food.
                </p>
            </div>
            <img src="https://www.milagrocorp.com/wp-content/uploads/2021/11/Maintaining-Your-Restaurants-Exterior.webp"/>
        </div>

    )

}

export default Page;