import React from "react";
import '../components/Styles/branding.css';

export default function Branding() {
    return (
        <div className="branding-div">
            <div className="videophoto-header">
                <p>BRANDING</p>
            </div>

            <div className="branding-body">
                <div className="logobrand">
                    <h2>LOGO & BRAND CREATION</h2>
                    <img alt="sippin sunshine" src={require('../components/images/sippinsunshine.png')}/>
                    <img alt="stacker storage" src={require('../components/images/stacker.png')} />
                    <img alt="calm water tours" src={require('../components/images/calmwater.png')}/>
                    <img alt="serene" src={require('../components/images/serene.png')}/>
                    <img alt="archer" src={require('../components/images/archer.png')}/>
                    <img alt="family tree" src={require('../components/images/familytree.png')}/>
                    <img alt="washington invest" src={require('../components/images/washinvest.png')}/>
                    <p>NOTE: THESE LOGOS ARE SAMPLES AND NOT REAL COMPANIES</p>
                </div>

                <div className="print">
                    <h2>PRINTING & MARKETING MATERIALS</h2>
                    <a href="https://printmuse.us"><img alt="printmuse logo" src={require('../components/images/printmuse.png')} /></a>
                </div>
            </div>
        </div>
    )
}