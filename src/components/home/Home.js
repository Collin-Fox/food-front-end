import React from "react";

import Hero from "../hero/Hero";
import Page from "../homePage/Page";
import NavigationBar from "../nav-bar/NavigationBar";
import Player from "../video-player/Player";
import BottomBar from "../bottom-bar/BottomBar";
const Home = ({foods}) => {
    return (

        <div>
            <NavigationBar></NavigationBar>
            <Player/>
            <Page/>
            <BottomBar/>

        </div>



    )
}

export default Home;