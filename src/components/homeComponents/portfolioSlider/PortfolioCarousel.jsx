
import React from 'react'
import PortfolioCarouselCard from './PortfolioCarouselCard';
import portfolioProjects  from '../../../portfolioProjects';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PortfolioCarousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const PortfolioCarousel = () => {
    const [activeSlide,setActiveSlide] = useState(0);
    const [activeSlide2,setActiveSlide2] = useState(0);
    const settings = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,

        className: "center slider variable-width",
        centerMode: true,

        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        // variableWidth: true,
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
    // console.log({activeSlide});
    // console.log({activeSlide2});
    console.log(" ");
    return (
        <div className="Home-Sub-Container" id = "Portfolio-Slider">
            <h2 className="Heading">
                <span className = "Light-Blue">Our</span> Portfolio
            </h2>
            <div >
                <Slider {...settings} >
                    {/* <h1 style={{margin: "100px", color:"red"}}>
                        hello
                    </h1>
                    <h1 style={{margin: "100px"}}>
                        hello
                    </h1>
                    <h1 style={{margin: "100px"}}>
                        hello
                    </h1>
                    <h1 style={{margin: "100px"}}>
                        hello
                    </h1> */}

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
// return  <PortfolioCarouselCard key={project.id} project={project} index={index} isActive={index===activeSlide}/> 
