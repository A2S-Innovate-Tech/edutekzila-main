import './ExpertiseTech.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function ExperticeTech(props) {
  return (
    <div className="Expertise-Card">
        <img src={props.img} alt="tech" />
        <p className="Light-Blue">{props.title}</p>
    </div>
  );
}

export default ExperticeTech;
