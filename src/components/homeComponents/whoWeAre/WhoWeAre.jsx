import './WhoWeAre.css';
import UsersImg1 from "../../../assets/images/users_1.png";
import UsersImg2 from "../../../assets/images/users_2.png";
import CounterWidget from "../../widgets/CounterWidget.jsx";

function WhoWeAre() {
    return (
        <div className="Home-Sub-Container Who-We-Are">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Who</span> We Are
            </h2>
            
            <p>We make custom Mobile Apps, Web & Enterprise Solutions for Startups, Enterprises & Mid-Scale Businesses.</p>
            <a href="/" style={{textDecoration: 'none', color: "#00BCE4"}}>Read More</a> <br/> <br/>
            <p className="P1">The top-notch and preeminent Web and Mobile App Development Company of India with its global presence in USA, MindInventory is first-rate choice of the clients worldwide. With sheer customer satisfaction in mind, we are profoundly dedicated to developing highly intriguing apps that strictly meet the business requirements and catering a wide spectrum of projects.</p>
            
            <div className="Professional-Experience">
                <CounterWidget img={UsersImg1} label="Professionals" count="30+"/>
                <CounterWidget img={UsersImg2} label="Years Experience" count="2+"/>
            </div>
        </div>
    );
}

export default WhoWeAre;
