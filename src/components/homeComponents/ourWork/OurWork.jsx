import CounterWidget from '../../widgets/CounterWidget';
import './OurWork.css';
import ActiveProjectsImg from "../../../assets/images/ourWork/active_projects.png";
import CompletedProjectsImg from "../../../assets/images/ourWork/completed_projects.png";
import HappyClientsImg from "../../../assets/images/ourWork/happy_clients.png";


function OurWork() {
    return (
        <div className="Home-Sub-Container Our-Work">
            <h2 >
                <span className = "Light-Blue">Our</span> Work
            </h2>
            <iframe className="Youtube-Player" title="video"
                src="https://www.youtube.com/embed/tgbNymZd7vqY">
            </iframe>
            <div className="Work-Info">
                <CounterWidget img={ActiveProjectsImg} label="Active Projects" count="12"/>
                <CounterWidget img={CompletedProjectsImg} label="Completed Projects" count="67"/>
                <CounterWidget img={HappyClientsImg} label="Happy Clients" count="200+"/>
            </div>
        
        </div>
    );
}

export default OurWork;
