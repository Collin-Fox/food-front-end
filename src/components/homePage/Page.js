import React from "react";
import "./Page.css"
import {Button} from "@mui/material";
const Page = () =>{
    return (
        <div className="container">
            <div className="about">
                <h1>
                    About Us
                </h1>
                <h4>
                    From the owner, _____
                </h4>
                <p>
                    Our family-owned restaurant has been proudly serving homemade,
                    quality meals in this community since 2007. For 17 years,
                    our talented chefs have prepared time-honored recipes passed down through generations.
                    We strive to provide all guests with a warm, welcoming dining experience and excellent service.
                    It brings us joy to be a gathering place where people connect over satisfying homestyle food.
                </p>
            </div>
            <div className="image-container-one">
                <img className="rest-img" src="https://www.milagrocorp.com/wp-content/uploads/2021/11/Maintaining-Your-Restaurants-Exterior.webp"/>
            </div>
            <div className="information">
                <h1>
                    Store Information
                </h1>
                <h4>
                    Operating Hours
                </h4>
                <h6>
                    Mon - Sat 11AM - 9PM
                </h6>
                <h4>
                    Address
                </h4>
                <h6>
                    10 Lake Zurich Dr, Lake Zurich
                </h6>
                <h4>
                    Contact Info
                </h4>
                <h6>
                    (847)-123-4567
                </h6>
                <h6>
                    website@gmail.com
                </h6>



            </div>
            <div className="image-container-two">
                <img className="rest-img" src="https://www.brandingidentitydesign.com/wp-content/uploads/2016/12/Restaurant-Interiors-01-700x466.jpg"/>
            </div>

        </div>

    )

}

export default Page;