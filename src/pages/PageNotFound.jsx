import "./PageNotFound.css";

import PageNotFoundImg from "../assets/images/pageNotFound.png";

const PageNotFound = () =>{

    return(
        <div className="Page-Not-Found">
            <img src={PageNotFoundImg} alt="" />
        </div>
    );
   
}

export default PageNotFound;