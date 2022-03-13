import "./TechnicalServices.css";

import {  useParams } from "react-router";
import GetQuoteForm from "../components/widgets/GetQuoteForm";

const TechnicalServices = () =>{
    const params  = useParams();
    const serviceName = params.serviceName;
    const serviceType = params.serviceType;


return <div>
        <div className="Technical-Services-Container">
            <div className="Technical-Services-Sub-Container Top-Heading">
                <h2>
                    OUR {serviceType.toUpperCase()} SERVICE
                </h2>
                {
                    serviceName.trim().split(" ").map((txt)=>{
                        return <h1 key={txt} className = "Light-Blue">
                            {txt}
                        </h1>
                    })
                }
            </div>
            

            <GetQuoteForm quoteTitle={serviceType}/>
            
        </div>
    </div>
}

export default TechnicalServices;