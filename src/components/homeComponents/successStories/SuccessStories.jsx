import './SuccessStories.css';
import StoryImg from "../../../assets/images/story_img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import StoryCard from "./StoryCard.jsx";

function SuccessStories() {
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
    return (
        <div className="Home-Sub-Container Success-Stories">
            <div className="Success-Stories-Heading">
                <h2 className="Margin-B0">
                    <span className = "Light-Blue">Success</span> Stories
                </h2>
                <div>
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
    );
}

export default SuccessStories;
