import React from "react";
import "../components/Styles/web.css";

export default function WebDesign() {
    return (
        <div className="webdesign-div">
            <div className="videophoto-header">
                <p>WEB DESIGN</p>
            </div>

            <div className="web-body">
                <div className="about">

                    <br></br>
                    <p><h2>Website Design and Development:</h2>
                        Custom website design tailored to the client's brand and objectives.
                        Responsive web development to ensure the site functions well on various devices (desktop, mobile, tablet).
                        User-friendly navigation and layout to enhance the user experience (UX).
                    </p>
                    <br></br>
                    <p><h2>Web Hosting and Domain Setup:</h2>
                        Assistance with domain registration and web hosting services.
                        Server configuration and maintenance to ensure website reliability and speed.
                    </p>
                    <br></br>
                    <p><h2>Website Maintenance and Support:</h2>
                        Ongoing maintenance to ensure the website remains up-to-date and secure.
                        Regular backups, security updates, and troubleshooting support.
                    </p>
                    <br></br>
                    <p><h2>User Interface (UI) and User Experience (UX):</h2>
                        Designing intuitive and aesthetically pleasing user interfaces.
                        Conducting usability testing and optimizing user journeys for better UX.
                    </p>
                    <br></br>
                    <a href="mailto:zach@rompala.biz"><p><h2>CONTACT</h2>zach@rompala.biz</p></a>
                </div>
                
                <div className="product-container">
                    <div className="product-card">
                        <a href="http://www.dd214chronicle.com"><img alt="web gif example" src={require('../components/images/dd214.png')} /></a>
                        
                    </div>
                    <div className="product-card">
                        <img alt="web gif example" src={require('../components/images/lfa.png')} />
                        
                    </div>
                    <div className="product-card">
                        
                        <a href="http://z2webdesign.com"><img alt="z-squared web" src={require('../components/images/Z-SQUARED WEB DESIGN.gif')} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}