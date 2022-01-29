import './OurExpertise.css';
import ExpertiseTech from './ExpertiseTech.jsx';
import expertiseTechs from "../../../expertiseTechs.js"

function OurExpertise() {
    return (
        <div className="Home-Sub-Container Our-Expertise">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Our</span> Expertise
            </h2>
            <div className="Techs">
                {
                    expertiseTechs.map((tech)=>{
                        return <ExpertiseTech key={tech.title} img={tech.img} title={tech.title}/>
                    })
                }
            </div>
        </div>
    );
}

export default OurExpertise;
