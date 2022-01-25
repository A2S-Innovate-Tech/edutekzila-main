import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Img1 from "../assets/images/01.jpg";
import StoryCard from "../components/StoryCard";

const Home = () =>{
    const stories = [
        {
            title: "Story1",
            img: Img1
        },
        {
            title: "Story2",
            img: Img1
        },
        {
            title: "Story3",
            img: Img1
        },
    ]
    return <div className="Home-Container">
        <div className="Home-Container-1">
            <h2>
                WE, WORK ON 4D PROCESS
            </h2>
            <h1 className = "Blue-Light">
                DISCUSS
            </h1>
            <h1>
                <span className = "Blue-Light">DESIGN</span> DEVELOP
            </h1>
            <h1 className = "Blue-Light">
                DELIVER
            </h1>
        </div>

        <div className="Home-Container-2">
            <div className="Home-Container-2-Heading">
                <h3 id="Success-Stories">
                    <span className = "Blue-Light">Success</span> Stories
                </h3>
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
                        return <StoryCard title={story.title} img={story.img} />
                    }))
                }
            </div>
            
        </div>

        
    </div>
}

export default Home;