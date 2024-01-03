import React from "react";

import Hero from "../hero/Hero";
import Page from "../homePage/Page";
import NavigationBar from "../nav-bar/NavigationBar";
import Player from "../video-player/Player";
const Home = ({foods}) => {
    return (

        <div>
            <NavigationBar></NavigationBar>
            <Player/>
            <Page/>

        </div>



    )
}

export default Home;