import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function ProjectCard({project,index}) {
  return (
      <div className={"Project-Card "+(index%2===1 ? "Project-Card-Gradient-2":"")}>
          <img src={project.img} alt="project img" />
          <div>
            <p className="Title Margin-B0">{project.title}</p>
            <p className="Category">{project.category}</p>
            <p className="Description Margin-T0 Margin-B0">{project.description}</p>
            <button className="Btn-Project-View">
                <FontAwesomeIcon icon={ faArrowRight } size="lg" />
            </button>
          </div>
      </div>
  );
}

export default ProjectCard;
