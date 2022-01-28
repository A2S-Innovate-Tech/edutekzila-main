import './ExpertiseTech.css';

function ExpertiseTech(props) {
  return (
    <div className="Expertise-Card">
        <img src={props.img} alt="tech" />
        <p className="Light-Blue">{props.title}</p>
    </div>
  );
}

export default ExpertiseTech;
