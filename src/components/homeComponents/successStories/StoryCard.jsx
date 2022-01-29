import './StoryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function StoryCard(props) {
  return (
    <div className="Story-Card">
        <p className="Story-Title Margin-T0 Margin-B0">{props.title}</p>
        <img src={props.img} alt="mobile" />
        <button className="Story-View-Icon">
            <FontAwesomeIcon icon={ faArrowRight } size="lg" />
        </button>
    </div>
  );
}

export default StoryCard;
