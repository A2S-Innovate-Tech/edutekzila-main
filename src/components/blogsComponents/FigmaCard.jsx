import "./FigmaCard.css";
import Img3 from "../../assets/images/blogs/img_3.png";

const FigmaCard = () =>{
    return <div className="Figma-Card">
        <img src={Img3} alt="Img3" />
        <div>
            <h2 className="Heading">
                How to design low fidelity wireframes in Figma ?
            </h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button>
                Read More
            </button>
        </div>
    </div>
}

export default FigmaCard;