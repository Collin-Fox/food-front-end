import React from "react";
import './Hero.css';
import Carousel from "react-material-ui-carousel";
import {Paper} from '@mui/material';

const Hero = ({foods}) =>{
    return(
        <div className="food-carousel">
            <Carousel>
                {
                    foods.map((food) => {
                        return(
                            <Paper key={food.storeId}>
                                <div className="food-card-container">
                                    <div className="food-card">
                                        <div className="food-detail">
                                            <div className="food-image">
                                                <img src={food.img} alt=""/>
                                            </div>
                                            <div className="food-name">
                                                <h4>{food.name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero