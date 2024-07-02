import React, { useState } from "react";
import Video from "../assets/video.mp4";
function Home() {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted >
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}
export default Home;