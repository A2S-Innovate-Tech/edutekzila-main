import './PortfolioCarouselCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function PortfolioCarouselCard({project,index,isActive}) {
  return (
      <div className={"Portfolio-Carousel-Card "+(isActive ? "Active":"InActive")}>
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

export default PortfolioCarouselCard;
