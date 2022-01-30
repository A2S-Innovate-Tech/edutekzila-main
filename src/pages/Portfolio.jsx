import "./Portfolio.css";

import ContactUs from "../components/homeComponents/contactUs/ContactUs";
import Projects from "../components/portfolioComponents/Projects";
import ProjectCategoriesBar from "../components/portfolioComponents/ProjectCategoriesBar";
import { useState } from "react";

const Portfolio = () =>{
    const [projectCategory,setProjectCategory] = useState("All");

    return <div>
        <div className="Portfolio-Container">
            <div className="Top-Heading">
                <h1>
                    OUR <span className = "Light-Blue">PORTFOLIO</span> OF WORK
                </h1>
            </div>
            <ProjectCategoriesBar setProjectCategory={setProjectCategory} selectedCategory={projectCategory}/>
            <Projects category={projectCategory}/>
        </div>

        {/* CONTACT US  */}
        <ContactUs />
    </div>
}

export default Portfolio;