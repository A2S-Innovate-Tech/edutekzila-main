import './OurServices.css';
import ourServices from "../../../ourServices.js"
import ServiceDropdown from "./ServiceDropdown.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, } from '@fortawesome/free-solid-svg-icons'

function OurServices() {
    return (
        <div className="Home-Sub-Container Our-Services">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Our</span> Services
            </h2>
            {/* ALL SERVICES */}
            {
                ourServices.map((services)=>{
                    
                    return <div key={services.category}>
                        <div className="Service-Category">
                            <div className = "fa-Circle">
                                <FontAwesomeIcon icon={ faCircle } size="sm"/>
                            </div>
                            <p >{services.category}</p>
                        </div> 
                        {
                            services.items.map((service)=>{
                                return <ServiceDropdown key={service.id}  service = {service}/>
                            })
                        }
                    </div>
                })
            }
        </div>
    );
}

export default OurServices;
