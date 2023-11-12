import React from "react";
import "../components/Styles/main.css"

export default function SocialMedia() {
    return (
        <div className="socialmedia-div">
            <div className="videophoto-header">
                <p>SOCIAL MEDIA</p>
            </div>

            <div className='socialmedia-body'>
                <div className='smlogos'>
                    <a href="https://www.facebook.com/profile.php?id=61551693846741&mibextid=LQQJ4d"><img alt='fb' src={require('../components/images/fb-logo.png')} /></a>
                    <a href="https://instagram.com/rompalacreativemedia?igshid=NmRjZnZ4NW13aHEz"><img alt='ig' src={require('../components/images/insta.png')} /></a>
                    <a href="https://www.linkedin.com/company/rompala-creative-media?trk=public_profile_topcard-current-company"><img alt='linked in' src={require('../components/images/linkedin.png')} /></a>
                </div>
                <div className="sm-bulk">
                    <div className='sm-img'>
                        <video autoPlay playsInline >
                            <source src={require('../components/images/sm-sample.mp4')} type="video/mp4"></source>
                        </video>
                        <p>CUSTOMER RECEIVED OVER 12,000 ENGAGEMENTS OVER THIS ONE POST ALONE</p>
                    </div>
                    <div className="sm-text">
                        <p>LET US HELP GROW YOUR ONLINE PRESENCE BY MANAGING YOUR SOCIAL MEDIA PRESENTS.</p>
                        <br></br>
                        <p>WE WILL MANAGE OR CAN TEACH YOU HOW TO CREATE ENGAGING AND MEANINGFUL CONTENT THAT WILL BE SURE TO CONVERT AND ENGAGE YOUR AUDIENCE.</p>
                        <p>*RESULTS ARE GUARANTEED</p>
                    </div>
                </div>
            </div>

            <div className='sm-footer'>
                <h2>EVERY SOCIAL MEDIA SERVICE IS CUSTOMIZED TO FIT YOUR GOALS AND BUDGET</h2>
                <a href='https://rompala.biz/contact'><p className='learnmore'>CLICK HERE TO LEARN MORE</p></a>
            </div>
        </div>
    )
}