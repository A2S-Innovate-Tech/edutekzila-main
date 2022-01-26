import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import StoryImg from "../assets/images/story_img.png";
import StoryCard from "../components/homeComponents/StoryCard";
import UsersImg1 from "../assets/images/users_1.png";
import UsersImg2 from "../assets/images/users_2.png";
import AngularjsImg from "../assets/images/techs/angularjs.png";
import DockerImg from "../assets/images/techs/docker.png";
import FlutterImg from "../assets/images/techs/flutter.png";
import KuberneteImg from "../assets/images/techs/kubernete.png";
import ReactjsImg from "../assets/images/techs/reactjs.png";
import VuejsImg from "../assets/images/techs/vuejs.png";
import ExperticeTech from "../components/homeComponents/ExpertiseTech";

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
                <div className="Info">
                    <img src={UsersImg1} className="Users-Icon-1" alt="chat" />
                    <div className="Text">
                        <h3 className = "Margin-B0 Light-Blue">30+</h3>
                        <p className="P1">Professionals</p>
                    </div>
                </div>

                <div className="Info">
                    <img src={UsersImg2} className="Users-Icon-1" alt="chat" />
                    <div className="Text">
                        <h3 className = "Margin-B0 Light-Blue">2+</h3>
                        <p className="P1">Years Experience</p>
                    </div>
                </div>

                
            </div>
        </div>


        {/* Our Expertise*/}
        <div className="Home-Sub-Container Our-Expertise">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Our</span> Expertise
            </h2>
            <div className="Techs">
                <ExperticeTech img={VuejsImg} title="Vuejs"/>
                <ExperticeTech img={ReactjsImg} title="Reactjs"/>
                <ExperticeTech img={AngularjsImg} title="Angularjs"/>
                <ExperticeTech img={FlutterImg} title="Flutter"/>
                <ExperticeTech img={KuberneteImg} title="Kubernete"/>
                <ExperticeTech img={DockerImg} title="Docker"/>
            </div>
        </div>


        {/* Our Services*/}
        <div className="Home-Sub-Container Who-We-Are">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Our</span> Services
            </h2>

            <div>

            </div>
            
        </div>


        
    </div>
}

export default Home;