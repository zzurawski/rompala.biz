import React from "react";
import "./home.css";
import './background.mp4';
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";


export default function Home() {
  

  return (
    <div className="homepage">
      <div className="rompala-home-logo">
        <video autoPlay muted loop playsInline>
          <source src={require('./background.mp4')} type="video/mp4" />
        </video>
        <div className="image-spot">
          <img alt="ROMPALA-CREATIVE" className="rompala-logo" src={require('../images/rompala-white.png')} />
        </div>
      </div>
      <div className="about-home">
        <p>
          HERE AT ROMPALA CREATIVE MEDIA WE PROVIDE SMALL BUSINESSES A CHANCE TO SUCCEED THROUGH BETTER BRANDING AND MARKETING. WHETHER IT'S VIDEO, SOCIAL MEDIA, WEB DESIGN, BETTER BRAND MESSAGING, OR ALL OF THE ABOVE, WE WILL GET YOUR SMALL BUSINESS SEEN THROUGH THE EYES OF THE RIGHT CLIENTS. 
          REACH OUT TO SEE HOW ROMPALA CREATIVE MEDIA CAN GET YOUR BUSINESS GROWING TODAY!
        </p>
      </div>

      <span className="logos">
      <Menu.Item
          as={Link}
          to="/socialmedia"
        >
        <div className="card">
          <div className="card__face card__face--front">
            <a href="/socialmedia"><img alt="social media" src={require('../images/social-media-icon.png')} /></a>
          </div>
          <div className="card__face card__face--back">
            <a href='/socialmedia'><p className="clickhere">Click here to learn more about our Social Media marketing service</p></a>
          </div>
        </div>
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/videophoto"
        >
        <div className="card">
          <div className="card__face card__face--front">
            <a href="rompala.biz/videophoto"><img alt="video icon" src={require('../images/video-icon.png')} /></a>
          </div>
          <div className="card__face card__face--back">
            <a href='rompala.biz/videophoto'><p className="clickhere">Click here to learn more about our Video/Photo service</p></a>
          </div>
        </div>
        </Menu.Item>

        

        <Menu.Item
          as={Link}
          to="/branding"
        >
        <div className="card">
          <div className="card__face card__face--front">
            <a href="/branding"><img alt="branding" src={require('../images/branding-icon.png')}></img></a>
          </div>
          <div className="card__face card__face--back">
            <a href="/branding"><p className="clickhere">Click here to learn more about our Branding service</p></a>
          </div>
        </div></Menu.Item>
      </span>

      
    </div>
  );
}