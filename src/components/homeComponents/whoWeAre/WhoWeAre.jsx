import './WhoWeAre.css';
import UsersImg1 from "../../../assets/images/users_1.png";
import UsersImg2 from "../../../assets/images/users_2.png";
import CounterWidget from "../../widgets/CounterWidget.jsx";

function WhoWeAre() {
    return (
        <div className="Home-Sub-Container Who-We-Are">
            <h2 className="Heading Margin-B0">
                <span className = "Light-Blue">Who</span> We Are <span className="Post-Heading-Line"></span>
            </h2>
            <p className="P1">We are a service provider firm providing educational and technology related services at best price in the market.</p>
            <p className="P1">We make custom Mobile Apps, Web & Enterprise Solutions for Startups, Enterprises & Mid-Scale Businesses. Our full-stack engineers, frontend engineers and UX/UI designers are ready to take your project to the next level.</p>
            <a className="P1" href="/" style={{textDecoration: 'none', color: "#337089"}}>Read More</a> <br/> <br/>
            <p className="P2">The top-notch and preeminent company of India with its global presence EduTekZila is first-rate choice of the clients worldwide. With sheer customer satisfaction in mind, we are profoundly dedicated to providing the services that strictly meet the business requirements and catering a wide spectrum of projects.</p>
            
            <div className="Professional-Experience">
                <CounterWidget img={UsersImg1} label="Professionals" count={30} postCount="+" duration={0}/>
                <CounterWidget img={UsersImg2} label="Years Experience" count={2} postCount="+" duration={0}/>
            </div>
            {/* <fieldset>
                <legend>aaa</legend>
            </fieldset> */}
        </div>
    );
}

export default WhoWeAre;
