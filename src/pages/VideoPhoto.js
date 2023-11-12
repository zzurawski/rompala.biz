import React from "react";

import '../components/Styles/videophoto.css';

export default function VideoPhoto() {
    return (
        <div className="videophoto-div">
            <div className="videophoto-header">
                <p>VIDEO & PHOTO</p>
            </div>

            <div className="examples-container">
                <div className="video-examples">
                    <h2>VIDEO EXAMPLES</h2>
                    
                        <div className="video-card">
                            <p>ANIMATION VIDEO</p>   
                            <iframe 
                                src="https://www.youtube.com/embed/iXc10nVXe7k?si=pxyO_96lUEOAjgvg" 
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>                      
                        </div>
                        <div className="video-card">
                            <p>STORYTELLING VIDEO</p>
                            <iframe 
                                src="https://www.youtube.com/embed/YuiLiqOrxK0?si=JHyS0k2QF9ZEg6PI" 
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="video-card">
                            <p>MISC VIDEO</p>
                            <iframe 
                                src="https://www.youtube.com/embed/Mjl4EDYf_zE?si=M9JGKMwwPtGzjcgf" 
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="video-card">
                            <p>PRODUCT SHOWCASE VIDEO</p>
                            <iframe 
                                src="https://www.youtube.com/embed/AyiRONBY5BQ?si=st8zbodONU6k2Uvj" 
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>
                   
                </div>

                <div className="photo-examples">
                    <h4>PHOTO EXAMPLES</h4>
                    <span className="photos">
                        <div className="card2">
                            <div className="card__face card__face--front">
                                <img alt="products" src={require('../components/images/products.jpg')} />
                            </div>
                            <div className="card__face card__face--back">
                                <p>PRODUCT PHOTOS</p>
                            </div>
                        </div>
                        
                        <div className="card2">
                            <div className="card__face card__face--front">
                                <img alt="products" src={require('../components/images/headshot.jpg')} />
                            </div>
                            <div className="card__face card__face--back">
                                <p>PROFESSIONAL HEADSHOTS</p>
                            </div>
                        </div>

                        <div className="card2">
                            <div className="card__face card__face--front">
                                <img alt="products" src={require('../components/images/event.jpg')} />
                            </div>
                            <div className="card__face card__face--back">
                                <p className="typeofphoto">EVENT PHOTOGRAPHY</p>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div className="sm-footer vp-foot">
                <h2>START YOUR VIDEO/PHOTO JOURNEY NOW</h2>
                <a href="/contact" ><p className="learnmore">CLICK HERE TO LEARN MORE</p></a>
            </div>
        </div>
    )
}