import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="subscription">
            <p>Subscribe to get information, latest news and other<br /> interesting offers about Cobham</p>
            <div className="division">
                <input type="text" placeholder="Your email" />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="footer-container">
            <div className="Footer-section">
                <div className="sectionOne">
                    <p className="logo">SkyHigh</p>
                    <p className="fText">
                    Book your trip in minutes, get full
                    <br /> control for much longer
                    </p>
                    <div className="fIcons">
                    <FaFacebook />
                    <FaInstagram style={{color:'#299454'}} />
                    <FaTwitter />
                    </div>
                </div>
                <div className="sectionTwo">
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Logistics</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
                <div className="sectionThree">
                    <ul>
                        <li>Contact</li>
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affilates</li>
                    </ul>
                </div>
                <div className="sectionFour">
                    <ul>
                        <li>More</li>
                        <li>Press Centre</li>
                        <li>Our Blogs</li>
                        <li>Low fare tips</li>
                    </ul>
                </div>
            </div>
            <p className="copyRight">Copyright, Travel. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
