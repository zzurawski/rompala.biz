import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img alt="ROMPALA CREATIVE MEDIA" src={require('../images/rompala-white.png')} className="logo-image"/>
            </div>

            <div className="social-media-links">
                <a href="https://www.facebook.com/profile.php?id=61551693846741&mibextid=LQQJ4d"><img className="sm-link" alt="facebook" src={require('../images/fb-logo.png')} /></a>
                <a href="https://instagram.com/rompalacreativemedia?igshid=NmRjZnZ4NW13aHEz"><img className="sm-link" alt="instagram" src={require('../images/insta.png')} /></a>
                <a href="https://www.linkedin.com/company/rompala-creative-media?trk=public_profile_topcard-current-company"><img className="sm-link" alt="linkedin" src={require('../images/linkedin.png')} /></a>
                <img className="sm-link" alt="youtube" src={require('../images/yt-icon2.png')} />
            </div>

            <div className="copyright">
                <p>
                ©2023 ROMPALA MEDIA. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    )
}