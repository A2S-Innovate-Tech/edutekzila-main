import './StoryCard.css';
import Img1 from "../assets/images/01.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function StoryCard(props) {
  return (
    <div className="Story-Container">
        <p className="Story-Title">{props.title}</p>
        <img src={props.img} className="Story-Img" alt="mobile" />
        <button className="Story-View-Icon">
            <FontAwesomeIcon icon={ faArrowRight } size="lg" />
        </button>
        {/* <div className="Story-Img-Container">
        </div> */}

        
      
    </div>
  );
}

export default StoryCard;
