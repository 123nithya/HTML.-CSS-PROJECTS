import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import image1 from "../Assets/img1.jpg";
import image2 from "../Assets/img2.jpg";
import image3 from "../Assets/img3.jpg";
import { FaUserEdit } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import pic from "../Assets/pic.png";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import a1 from "../Assets/a1.jpg";
import a2 from "../Assets/a2.jpg";
import a3 from "../Assets/a3.jpg";

export default function ImgMediaCard() {
  return (
    <div className="destination-container">
      <h1 className="main-heading">
        Our Best <span style={{ color: "#299454" }}>Tour</span> Packages
      </h1>
      <div className="destinationCard">
        <Card
          sx={{ maxWidth: 345 }}
          elevation={5}
          style={{ borderRadius: "20px", marginLeft: "10%" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={image1}
          />
          <CardContent>
            <div className="flex">
              <h2>Switzerland</h2>
              <p>$5,42k</p>
            </div>
            <p className="day">10 Days trip</p>
          </CardContent>
          <button className="btn">Read More</button>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          elevation={5}
          style={{ borderRadius: "20px" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={image2}
          />
          <CardContent>
            <div className="flex">
              <h2>Switzerland</h2>
              <p>$5,42k</p>
            </div>
            <p className="day">10 Days trip</p>
          </CardContent>
          <button className="btn">Read More</button>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          elevation={5}
          style={{ borderRadius: "20px" }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={image3}
          />
          <CardContent>
            <div className="flex">
              <h2>Switzerland</h2>
              <p>$5,42k</p>
            </div>
            <p className="day">10 Days trip</p>
          </CardContent>
          <button className="btn">Read More</button>
        </Card>
      </div>
      <div className="thingstodo">
        <h1 className="sub-heading">
          Things you need <span style={{ color: "#299454" }}>to do</span>
        </h1>
        <p>
          We ensure that you'll embark on a prefectly planned,
          <br />
          safe vocation at a price you can afford.
        </p>
        <div className="threeCards">
          <Card elevation={5} style={{ width: "400px" }}>
            <CardContent className="content">
              <FaUserEdit className="icon" />
              <h3>Sign Up</h3>
              <p>
                Completes all the work associated
                <br /> with planning and processing
              </p>
            </CardContent>
          </Card>
          <Card style={{ width: "400px" }} elevation={5}>
            <CardContent className="content">
              <FaMoneyCheckAlt className="icon" />
              <h3>Worth of Money</h3>
              <p>
                After successful access then book
                <br /> from exclusive deals & pricing
              </p>
            </CardContent>
          </Card>
          <Card style={{ width: "400px" }} elevation={5}>
            <CardContent className="content">
              <GrMapLocation className="icon" />
              <h3>Exciting Travel</h3>
              <p>
                Start and explore a wide range of
                <br /> exciting travel experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="nextSection">
        <div className="oneSec">
          <span style={{ color: "#299454" }}>Easy and Fast</span>
          <h2>
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>
          <div className="seccontent">
            <div className="one">
              <FaPlaceOfWorship className="icon" />
              <div>
                <h5>Choose Destination</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  <br /> adipisicing elit. Modi, tenetur.
                </p>
              </div>
            </div>
            <div className="two">
              <MdPayments className="icon" />
              <div>
                <h5>Make Payment</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  <br /> adipisicing elit. Modi, tenetur.
                </p>
              </div>
            </div>
            <div className="three">
              <FaCarAlt className="icon" />
              <div>
                <h5>Reach Airport On Selected Date</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  <br /> adipisicing elit. Modi, tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="twoSec">
          <Card elevation={5} style={{ borderRadius: "20px", width: "390px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="350"
              image={pic}
            />
            <CardContent>
              <h3 className="cnt">
                Travel with us to see the entire world at affordable price
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="testimonials">
        <h1>
          What About Our <span style={{ color: "#299454" }}>Clients</span> Say
        </h1>
        <div className="testCards">
          <Card
            data-resizable
            sx={{
              textAlign: "center",
              alignItems: "center",
              width: 343,
              // to make the demo resizable
              overflow: "auto",
              resize: "horizontal",
              "--icon-size": "100px",
            }}
            className="c1"
            elevation={5}
          >
            <CardOverflow variant="solid" className="test1">
              <AspectRatio
                variant="outlined"
                color="warning"
                ratio="1"
                sx={{
                  m: "auto",
                  transform: "translateY(50%)",
                  borderRadius: "50%",
                  width: "var(--icon-size)",
                  boxShadow: "sm",
                  bgcolor: "background.surface",
                  position: "relative",
                }}
              >
                <div>
                  <img src={a1} alt="" style={{ borderRadius: "50%" }} />
                </div>
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ maxWidth: "40ch" }} style={{marginTop:'50px'}}>
                <h2>"Best Services"</h2>
                <p>"Happy with Next Design proactiveness, capabilities and responsiveness throughout their partnership mutually way of working</p>
            </CardContent>
          </Card>
          <Card
            className="c1"
            elevation={5}
            data-resizable
            sx={{
              textAlign: "center",
              alignItems: "center",
              width: 343,
              // to make the demo resizable
              overflow: "auto",
              resize: "horizontal",
              "--icon-size": "100px",
            }}
          >
            <CardOverflow variant="solid" className="test1">
              <AspectRatio
                variant="outlined"
                color="warning"
                ratio="1"
                sx={{
                  m: "auto",
                  transform: "translateY(50%)",
                  borderRadius: "50%",
                  width: "var(--icon-size)",
                  boxShadow: "sm",
                  bgcolor: "background.surface",
                  position: "relative",
                }}
              >
                <div>
                  <img src={a2} alt="" style={{ borderRadius: "50%" }} />
                </div>
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ maxWidth: "40ch" }} style={{marginTop:'50px'}}>
                <h2>"Best Services"</h2>
                <p>"Happy with Next Design proactiveness, capabilities and responsiveness throughout their partnership mutually way of working</p>
            </CardContent>
          </Card>
          <Card
            className="c1"
            elevation={5}
            data-resizable
            sx={{
              textAlign: "center",
              alignItems: "center",
              width: 343,
              // to make the demo resizable
              overflow: "auto",
              resize: "horizontal",
              "--icon-size": "100px",
            }}
          >
            <CardOverflow variant="solid" className="test1">
              <AspectRatio
                variant="outlined"
                color="warning"
                ratio="1"
                sx={{
                  m: "auto",
                  transform: "translateY(50%)",
                  borderRadius: "50%",
                  width: "var(--icon-size)",
                  boxShadow: "sm",
                  bgcolor: "background.surface",
                  position: "relative",
                }}
              >
                <div>
                  <img src={a3} alt="" style={{ borderRadius: "50%" }} />
                </div>
              </AspectRatio>
            </CardOverflow>
            <CardContent sx={{ maxWidth: "40ch" }} style={{marginTop:'50px'}}>
                <h2>"Best Services"</h2>
                <p>"Happy with Next Design proactiveness, capabilities and responsiveness throughout their partnership mutually way of working</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
