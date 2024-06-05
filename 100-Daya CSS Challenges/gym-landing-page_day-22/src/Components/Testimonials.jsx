import React from 'react'
import avatar1 from "../Images/a1.jpg";
import avatar2 from "../Images/a2.jpg";
import avatar3 from "../Images/a3.jpg";

const Testimonials = () => {
  return (
    <div className='testimonial-section'>
        <h1>Testimonials</h1>
        <div className="testimonial-text-container">
            <h2 className="testimonial-heading">
                Not sure if it's worth your money?
            </h2>
            <p className="testimonial-text">
                Reviews from our members about their experience was<br /> like during the course of their program.
            </p>
        </div>
        <div className="testcards">
            <div className="testi-container">
                <img src={avatar1} alt="user1" />
                <div className="testimonial-content">
                    <h2>Parth Biyan</h2>
                    <p>The gym is always clean and well-ventilated
                        which is great. Overall, I have been very
                        pleased with the cardio training options
                        available. The gym has a wide variety of cardio machines, including treadmills, all of
                        which are well-maintained.
                    </p>
                    <br />
                    ⭐⭐⭐⭐
                </div>
            </div>
            <div className="testi-container">
                <img src={avatar2} alt="user1" />
                <div className="testimonial-content">
                    <h2>Riya Sen</h2>
                    <p>
                        I recently attended a group fitness class at the gym. 
                        The instructor was incredibly knowledgeable and provided clead
                        instructions for each exercise. It was an amazing experience.
                    </p>
                    <br />
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
            <div className="testi-container">
                <img src={avatar3} alt="user1" />
                <div className="testimonial-content">
                    <h2>Parth Biyan</h2>
                    <p>The gym is always clean and well-ventilated
                        which is great. Overall, I have been very
                        pleased with the cardio training options
                        available. The gym has a wide variety of cardio machines, including treadmills, all of
                        which are well-maintained.
                    </p>
                    <br />
                    ⭐⭐⭐⭐
                </div>
            </div>
        </div>
        <div className="newletter">
            <p>Take your first <br />step this moment!</p>
            <div className="input">
                <input type="text" placeholder='Your email' /><button>Sign me up!</button>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
