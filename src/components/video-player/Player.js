import React from "react";
import ReactPlayer from "react-player";
import "./Player.css"
import vid from "./rest.mp4"
const Player = ()=>{

    return(
        <div className="player-container">

            <video

                width="100%"
                height="100%"
                autoplay
                muted
                controls

            src={vid}>


            </video>
        </div>

    )
}

export default Player