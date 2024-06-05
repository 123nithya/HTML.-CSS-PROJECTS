import React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Membership = () => {
  return (
    <div className="membership-section">
    <br />
    <br />
    <br />
      <h1 className="membership-mainheading">Memberships</h1>
      <div className="membership-text-container">
        <h2 className="membership-heading">
          Avail memberships are proces <span className="span">30% off</span>
        </h2>
        <p className="membership-text">
          Begin your transformation journey by choosing the <br /> membership
          plan to continue with the program of your choice.
        </p>
      </div>
      <div className="membership-card">
        <Card sx={{ Width: 500 }} className="card">
          <CardActionArea>
            <CardContent>
              <h3 className="typo">Monthly Plan</h3>
              <p>Get it for</p>
              <span>$28</span>
              <p>instead of <strike>$40</strike></p>
              <div className="icons">
                <div className="one1">
                    <CheckCircleOutlineIcon className="icon"/> <p>5 hours training.</p>
                </div>
                <br />
                <div className="two2">
                    <CheckCircleOutlineIcon className="icon"/> <p>Consultation and coaching.</p>
                </div>
                <br />
                <div className="three3">
                    <CheckCircleOutlineIcon className="icon"/> <p>Diet plan.</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button className="btn">Get it now</button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ Width: 500 }} className="card">
          <CardActionArea>
            <CardContent>
              <h3 className="typo">Annual Plan</h3>
              <p>Get it for</p>
              <span>$134</span>
              <p>instead of <strike>$192</strike></p>
              <div className="icons">
                <div className="one1">
                    <CheckCircleOutlineIcon className="icon"/> <p>5 hours training.</p>
                </div>
                <br />
                <div className="two2">
                    <CheckCircleOutlineIcon className="icon"/> <p>Consultation and coaching.</p>
                </div>
                <br />
                <div className="three3">
                    <CheckCircleOutlineIcon className="icon"/> <p>Diet plan.</p>
                </div>
                <br />
                <div className="three3">
                    <CheckCircleOutlineIcon className="icon"/> <p>Nutrition Expert advice.</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button className="btn">Get it now</button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ Width: 500 }} className="card">
          <CardActionArea>
            <CardContent>
              <h3 className="typo">Personal Training</h3>
              <p>Get monthly paid for</p>
              <span>$42</span>
              <p>instead of <strike>$600</strike></p>
              <div className="icons">
                <div className="one1">
                    <CheckCircleOutlineIcon className="icon"/> <p>5 hours training.</p>
                </div>
                <br />
                <div className="two2">
                    <CheckCircleOutlineIcon className="icon"/> <p>Consultation and coaching.</p>
                </div>
                <br />
                <div className="three3">
                    <CheckCircleOutlineIcon className="icon"/> <p>Diet plan.</p>
                </div>
                <br />
                <div className="three3">
                    <CheckCircleOutlineIcon className="icon"/> <p>Nutrition expert advice.</p>
                </div>
                <br />
                <div className="three3">
                    <CheckCircleOutlineIcon className="icon"/> <p>Free gym wear.</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <button className="btn">Get it now</button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Membership;
