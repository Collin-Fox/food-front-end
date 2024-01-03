import React from "react";
import ReactPlayer from "react-player";
import "./Player.css"
import vid from "./diner.mp4"
const Player = ()=>{

    return(
        <div className="player-container">

            <video

                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                disablePictureInPicture="true"


            src={vid}>


            </video>
        </div>

    )
}

export default Player