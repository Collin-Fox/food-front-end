import React, {useState} from "react";
import Axios from 'axios';
import "./InputField.css"
import axios from 'axios';

const InputField = () =>{

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = [...formData.values()];
        const isEmpty = values.includes('');
        if(isEmpty){
            console.log('please provide all values');
            return;
        }
        const data = Object.fromEntries(formData);
        const jsonData = JSON.stringify(data);


        fetch('https://7157-108-214-189-156.ngrok-free.app/api/v1/reservations',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: jsonData
        })
        e.currentTarget.reset();
    }


    return(
        <div className="res-container">

            <form className="reservation-form" onSubmit={onSubmit}>

                <div className="elem-group">
                    <label for="name">Party Name</label>
                    <input type="text" id="name" name="partyName"/>
                </div>

                <div className="elem-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>

                <div className="elem-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone"/>
                </div>

                <div className="elem-group-inline">
                    <label htmlFor="size">Party Size</label>
                    <input type="number" id="size" name="size"/>
                </div>

                <div className="elem-group-inline">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date"/>
                </div>

                <div className="elem-group-inline">
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" name="time"/>
                </div>

                <br></br>
                <div className="elem-group">
                    <label htmlFor="requests">Special Requests?</label>
                    <textarea  id="requests" name="requests" placeholder="Tell us any additional information here."/>
                </div>

                <button type="submit">Book Your Reservation Now</button>
            </form>

        </div>


    )
}

export default InputField