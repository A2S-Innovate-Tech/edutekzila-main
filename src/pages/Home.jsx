import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faCircle} from '@fortawesome/free-solid-svg-icons'
import StoryImg from "../assets/images/story_img.png";
import StoryCard from "../components/homeComponents/StoryCard";
import UsersImg1 from "../assets/images/users_1.png";
import UsersImg2 from "../assets/images/users_2.png";
import ActiveProjectsImg from "../assets/images/ourWork/active_projects.png";
import CompletedProjectsImg from "../assets/images/ourWork/completed_projects.png";
import HappyClientsImg from "../assets/images/ourWork/happy_clients.png";
import expertiseTechs from "../expertiseTechs.js"
import ExpertiseTech from "../components/homeComponents/ExpertiseTech";
import ourServices from "../ourServices.js"
import ServiceDropdown from "../components/homeComponents/ServiceDropdown.jsx";
import platforms from "../platforms.js"
import Platform from "../components/homeComponents/Platform";
import CounterWidget from "../components/widgets/CounterWidget";
const Home = () =>{
    const stories = [
        {
            title: "Story1",
            img: StoryImg
        },
        {
            title: "Story2",
            img: StoryImg
        },
        {
            title: "Story3",
            img: StoryImg
        },
    ]
    return <div className="Home-Container">
        {/* WE WORK ON 4D PROCESS         */}
        <div className="Home-Sub-Container Work-Process">
            <h2>
                WE, WORK ON 4D PROCESS
            </h2>
            <h1 className = "Light-Blue">
                DISCUSS
            </h1>
            <h1>
                <span className = "Light-Blue">DESIGN</span> DEVELOP
            </h1>
            <h1 className = "Light-Blue">
                DELIVER
            </h1>
        </div>

        {/* SUCCESS STORIES   */}
        <div className="Home-Sub-Container Success-Stories">
            <div className="Success-Stories-Heading">
                <h2 className="Margin-B0">
                    <span className = "Light-Blue">Success</span> Stories
                </h2>
                <div className="Stories-Btns">
                    <button className="Btn-Stories-Previous">
                        <FontAwesomeIcon icon={ faArrowLeft } />
                    </button>
                    <button  className="Btn-Stories-Next">
                        <FontAwesomeIcon icon={faArrowRight } />
                    </button>
                </div>
            </div>
            <p>We believe that our client success is our success.</p>
            <div className="Stories-Container">
                {
                    stories.map((story=>{
                        return <StoryCard key={story.title} title={story.title} img={story.img} />
                    }))
                }
            </div>
            
        </div>

        {/* WHO WE ARE   */}
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


        {/* Our Expertise*/}
        <div className="Home-Sub-Container Our-Expertise">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Our</span> Expertise
            </h2>
            <div className="Techs">
                {
                    expertiseTechs.map((tech)=>{
                        return <ExpertiseTech img={tech.img} title={tech.title}/>
                    })
                }
            </div>
        </div>


        {/* OUR SERVICES*/}
        <div className="Home-Sub-Container Our-Services">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Our</span> Services
            </h2>
            {/* ALL SERVICES */}
            {
                ourServices.map((services)=>{
                    
                    return <div>
                        <div className="Service-Category">
                            <div className = "fa-Circle">
                                <FontAwesomeIcon icon={ faCircle } size="sm"/>
                            </div>
                            <p >{services.category}</p>
                        </div> 
                        {
                            services.items.map((service)=>{
                                return <ServiceDropdown key={service.id}  service = {service}/>
                            })
                        }
                    </div>
                })
            }
        </div>
        

        {/* NOT FOR ONE (MULTIPLE PLATFORMS)*/}
        <div className="Home-Sub-Container Not-For-One">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Not</span> For One
            </h2>
            <p>We can design for variety of platforms whether it is computers, smart watches, smartphones, wearables and many more .....</p>
            <div className="Platforms-Container">
                {
                    platforms.map((platform)=>{
                        return <Platform key={platform.title} platform={platform}/>
                    })
                }
            </div>
        </div>


         {/* OUR WORK */}
         <div className="Home-Sub-Container Our-Work">
            <h2 >
                <span className = "Light-Blue">Our</span> Work
            </h2>
            <iframe className="Youtube-Player"
                src="https://www.youtube.com/embed/tgbNymZd7vqY">
            </iframe>
            <div className="Work-Info">
                <CounterWidget img={ActiveProjectsImg} label="Active Projects" count="12"/>
                <CounterWidget img={CompletedProjectsImg} label="Completed Projects" count="67"/>
                <CounterWidget img={HappyClientsImg} label="Happy Clients" count="200+"/>
            </div>
           
        </div>


        
    </div>
}

export default Home;