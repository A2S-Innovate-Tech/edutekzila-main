
import React from 'react'
import PortfolioCarouselCard from './PortfolioCarouselCard';
import portfolioProjects  from '../../../portfolioProjects';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PortfolioCarousel"
import { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const PortfolioCarousel = () => {
    const [activeSlide,setActiveSlide] = useState(0);
    const [activeSlide2,setActiveSlide2] = useState(0);
    const settings = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,

        // className: "center slider variable-width",
        // centerMode: true,

        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        variableWidth: true,
        adaptiveHeight: true,

        arrows: false,
        dots: false,

        // beforeChange: (current, next) => setActiveSlide(next),
        // afterChange: current => setActiveSlide2(current+1),

        // customPaging: (p,i) =>{
        //     return  (
        //         <FontAwesomeIcon icon={faCircle} size={p===activeSlide? "lg" : "sm"} color={p===activeSlide? "var(--blue-light)" : "rgba(255, 255, 255, 0.6)"}/>
        //     )
        // }
    };
    return (
        <div className="Home-Sub-Container" id = "Portfolio-Slider">
            <h2 className="Heading">
                <span className = "Light-Blue">Our</span> Portfolio
            </h2>
            <div >
                <Slider {...settings} >
                {
                    portfolioProjects.slice(0,4)
                    .map((project,index)=>{
                        return  <PortfolioCarouselCard key={project.id} project={project} index={index} isActive={true}/> 
                    })
                }
                </Slider>
            </div>
        </div>
        
    )
}
export default PortfolioCarousel;