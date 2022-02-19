import CounterWidget from '../../widgets/CounterWidget';
import './OurWork.css';
import ActiveProjectsImg from "../../../assets/images/ourWork/active_projects.png";
import CompletedProjectsImg from "../../../assets/images/ourWork/completed_projects.png";
import HappyClientsImg from "../../../assets/images/ourWork/happy_clients.png";

function OurWork() {
    return (
        <div className="Home-Sub-Container Our-Work">
            <h2 className="Heading">
                <span className = "Light-Blue">Our</span> Work
            </h2>
            {/* <div className="Video-Container">
                <iframe className="Youtube-Player" title="video"
                    src="https://www.youtube.com/embed/I2wvhRUVNTM"
                    allowFullScreen
                    >
                </iframe>
            </div> */}
            <div className="Work-Info">
                <CounterWidget img={ActiveProjectsImg} label="Active Projects" count={12} duration={2}/>
                <CounterWidget img={CompletedProjectsImg} label="Completed Projects" count={67} duration={2}/>
                <CounterWidget img={HappyClientsImg} label="Happy Clients" count={200} postCount="+" duration={2}/>
            </div>
        
        </div>
    );
}

export default OurWork;
