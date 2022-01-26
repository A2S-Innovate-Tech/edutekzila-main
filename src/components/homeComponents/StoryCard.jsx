import './StoryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function StoryCard(props) {
  return (
    <div className="Story-Container">
        <p className="Story-Title">{props.title}</p>
        <img src={props.img} className="Story-Img" alt="mobile" />
        <button className="Story-View-Icon">
            <FontAwesomeIcon icon={ faArrowRight } size="lg" />
        </button>
    </div>
  );
}

export default StoryCard;
