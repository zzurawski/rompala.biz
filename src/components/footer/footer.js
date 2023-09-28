import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img alt="ROMPALA CREATIVE MEDIA" src={require('../images/rompala-white.png')} className="logo-image"/>
            </div>

            <div className="social-media-links">
                <img className="sm-link" alt="facebook" src={require('../images/fb-logo.png')} />
                <img className="sm-link" alt="instagram" src={require('../images/insta.png')} />
                <img className="sm-link" alt="linkedin" src={require('../images/linkedin.png')} />
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