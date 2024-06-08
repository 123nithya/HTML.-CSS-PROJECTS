import React from "react";
import aboutImg from "../Assets/img1.jpg";

const About = () => {
  return (
    <div className="about" id="abt">
      <h1>About</h1>
      <div className="about-text-container">
        <img src={aboutImg} alt="nature" className="image-container" />
        <br />
        Welcome to SkyHigh Travel Agency! Founded in 2010, we are a
        passionate team of travel enthusiasts dedicated to turning your dream
        destinations into reality. We offer expert knowledge, personalized
        itineraries, and seamless planning to ensure unforgettable travel
        experiences.
        <br />
        Our team of seasoned travelers and industry experts know the best
        places, hidden gems, and local secrets. We craft bespoke journeys
        tailored to your preferences, handling every detail from flights to
        guided tours for a hassle-free experience. <br />
        Committed to responsible travel, we partner with eco-friendly hotels and
        support local communities, ensuring your travels leave a positive
        impact. We offer expert knowledge, personalized itineraries, and
        seamless planning for unforgettable experiences. Our seasoned travelers
        know the best places, hidden gems, and local secrets.
        <br />
        We handle every detail, from flights to guided tours, ensuring a
        hassle-free journey. Committed to responsible travel, we partner with
        eco-friendly hotels and support local communities.
        <br />
        Over the years, we have grown into a trusted name in the travel
        industry, known for our commitment to quality, innovation, and customer
        satisfaction. Our team comprises seasoned travelers and industry experts
        who have firsthand experience of the destinations we offer. We know the
        best places to visit, hidden gems to explore, and local secrets that
        make each trip unique. <br />
        No two travelers are the same, and neither are our itineraries. We take
        the time to understand your preferences, interests, and travel style to
        craft bespoke journeys that are tailored just for you.
        <br />
        From the moment you contact us until you return home, we handle all the
        details. Our comprehensive services include everything from flight
        bookings and accommodations to guided tours and local experiences,
        ensuring a hassle-free travel experience.
        <br />
        We are committed to promoting responsible travel. Our partnerships with
        eco-friendly hotels and tour operators, along with our efforts to
        support local communities, ensure that your travels leave a positive
        impact on the world.
        <br />
        We handle every detail, from flights to guided tours, ensuring a
        hassle-free journey. Committed to responsible travel, we partner with
        eco-friendly hotels and support local communities. Meet our team: John
        Doe, visionary CEO; Jane Smith, customer experience expert; Carlos
        Martinez, adventurous itinerary specialist; and Emma Lee, sustainability
        advocate.<br /><br /><br />
        <span>Discover the world with SkyHigh Travel Agency!</span>
      </div>
    </div>
  );
};

export default About;
