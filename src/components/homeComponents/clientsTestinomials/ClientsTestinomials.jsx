import './ClientsTestinomials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import clientsTestinomials from "../../../clientsTestinomials.js"
import TestinomialCard from "./TestinomialCard.jsx";

function ClientsTestinomials() {
    return (
        <div className="Home-Sub-Container Clients-Testimonials">
            <div className="Clients-Testimonials-Heading">
                <h2>
                    <span className = "Light-Blue">Clients</span> Testimonials
                </h2>
                <div>
                    <button className="Btn-Testinomials-Previous">
                        <FontAwesomeIcon icon={ faArrowLeft } />
                    </button>
                    <button  className="Btn-Testinomials-Next">
                        <FontAwesomeIcon icon={faArrowRight } />
                    </button>
                </div>
            </div>
            <div className="Testimonials-Container">
                {
                    clientsTestinomials.map((testinomial=>{
                        return <TestinomialCard key={testinomial.id} testinomial={testinomial}/>
                    }))
                }
            </div>
            <a className="View-All" href="/">View all +</a>
            
        </div>
    );
}

export default ClientsTestinomials;
