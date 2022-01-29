import "./Portfolio.css";

import ContactUs from "../components/homeComponents/contactUs/ContactUs";
import Projects from "../components/portfolioComponents/Projects";
import ProjectCategoriesBar from "../components/portfolioComponents/ProjectCategoriesBar";

const Portfolio = () =>{
    
    return <div>
        <div className="Portfolio-Container">
            <div className="Portfolio-Sub-Container Top-Heading">
                <h1>
                    OUR <span className = "Light-Blue">PORTFOLIO</span> OF WORK
                </h1>
            </div>
            <ProjectCategoriesBar />
            <Projects />
            
        </div>

        {/* CONTACT US  */}
        <ContactUs />
    </div>
}

export default Portfolio;