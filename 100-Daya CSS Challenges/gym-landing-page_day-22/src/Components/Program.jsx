import React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import weightlift from "../Images/weightlift.jpg";
import cardio from "../Images/cardio.jpg";
import groupFitness from "../Images/gf.jpg";

const Program = () => {
  return (
    <div className="program-section">
      <h1 className="program-mainheading">Programs</h1>
      <div className="program-text-container">
        <h2 className="program-heading">You Choose, We'll deliver...</h2>
        <p className="program-text">
          Pick from multiple programs according to your fitness goals.
          <br />
          Rest of the work, it's on us.
        </p>
      </div>
      <div className="program-cards">
        <Card sx={{ Width: 500 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={weightlift}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="typo">
                Weight Lifting
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ Width: 500 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={cardio}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="typo">
                cardio Workout
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ Width: 500 }} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={groupFitness}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="typo">
                Group Fitness
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Program;
