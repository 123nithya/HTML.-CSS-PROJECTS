import React from "react";
import bgVideo from "../Assets/v1.mp4";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const BgVideo = () => {
  return (
    <div>
      <div className="bgContainer">
        <div className="overlay"></div>
        <video src={bgVideo} autoPlay loop muted></video>
        <div className="navbar">
          <div>
            <p className="logo">SkyHigh</p>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <button className="btn">Login</button>
        </div>
        <div className="container">
          <h2 className="wlc">Wanna Travel Around The World</h2>
          <h1 className="title">Your Journey Starts Here</h1>
        </div>
        <div className="card">
          <Card sx={{ minWidth: 275 }} className="c1" elevation={10}>
            <CardContent>
              <h1>10M+</h1>
              <p>Total Customers</p>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} className="c2" elevation={10}>
            <CardContent>
              <h1>09+</h1>
              <p>Years Of Experience</p>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} className="c3" elevation={10}>
            <CardContent>
              <h1>12K</h1>
              <p>Total Destinations</p>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} className="c4" elevation={10}>
            <CardContent>
              <h1>5.0</h1>
              <p>Average Ratings</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BgVideo;
