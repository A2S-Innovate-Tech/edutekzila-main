import "./ParticularService.css";

import SuccessStories from "../components/homeComponents/successStories/SuccessStories";
import {  useParams } from "react-router";
import WhatWeOffer from "../components/particularServiceComponents/whatWeOffer/WhatWeOffer";
import WhyUs from "../components/particularServiceComponents/whyUs/WhyUs";
import GetQuoteForm from "../components/widgets/GetQuoteForm";
import WorkAtAGlance from "../components/particularServiceComponents/workAtAGlance/WorkAtAGlance";
import MeetOurTeam from "../components/particularServiceComponents/meetOurTeam/MeetOurTeam";

const ParticularService = () =>{
    const params  = useParams();
    const serviceName = params.serviceName;
    const serviceType = params.serviceType;


return <div>
        <div className="Particular-Service-Container">
            {/* WE WORK ON 4D PROCESS         */}
            <div className="Particular-Service-Sub-Container Top-Heading">
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
            {/* WHAT WE OFFER   */}
            <WhatWeOffer />

            {/* WHY US   */}
            <WhyUs />

            {/* WORK AT A GLANCE   */}
            <WorkAtAGlance />

            {/* SUCCESS STORIES   */}
            <SuccessStories />

            {/* MEET OUR TEAM  */}
            <MeetOurTeam />

            <GetQuoteForm quoteTitle={serviceType}/>
            
        </div>
    </div>
}

export default ParticularService;