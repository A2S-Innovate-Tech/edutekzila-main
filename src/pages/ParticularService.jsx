import "./ParticularService.css";

import SuccessStories from "../components/homeComponents/successStories/SuccessStories";
import WhoWeAre from "../components/homeComponents/whoWeAre/WhoWeAre";
import OurExpertise from "../components/homeComponents/ourExpertise/OurExpertise";
import OurServices from "../components/homeComponents/ourServices/OurServices";
import NotForOne from "../components/homeComponents/notForOne/NotForOne";
import OurWork from "../components/homeComponents/ourWork/OurWork";
import ClientsTestinomials from "../components/homeComponents/clientsTestinomials/ClientsTestinomials";
import OurBlogs from "../components/homeComponents/ourBlogs/OurBlogs";
import ContactUs from "../components/homeComponents/contactUs/ContactUs";
import { useLocation } from "react-router";

const ParticularService = () =>{
    const location = useLocation();
    // console.log(location.pathname.split('/')[2]=="Android%20Development")
    console.log(decodeURI(location.pathname).split("/")[1]);
    const serviceName = decodeURI(location.pathname).split("/")[3];
    const serviceType = decodeURI(location.pathname).split("/")[2];
    return <div>
        <div className="Home-Container">
            {/* WE WORK ON 4D PROCESS         */}
            <div className="Home-Sub-Container Top-Heading">
                <h2>
                    OUR {serviceType.toUpperCase()} SERVICE
                </h2>
                {
                    serviceName.trim().split(" ").map((txt)=>{
                        return <h1 className = "Light-Blue">
                            {txt}
                        </h1>
                    })
                }
            </div>

            {/* SUCCESS STORIES   */}
            <SuccessStories />

            {/* WHO WE ARE   */}
            <WhoWeAre />

            {/* Our Expertise*/}
            <OurExpertise />

            {/* OUR SERVICES*/}
            <OurServices />

            {/* NOT FOR ONE (MULTIPLE PLATFORMS)*/}
            <NotForOne />

            {/* OUR WORK */}
            <OurWork />

            {/* CLIENTS TESTIMONIALS   */}
            <ClientsTestinomials />


            {/* OUR BLOGS  */}
            <OurBlogs />
            
        </div>

        {/* CONTACT US  */}
        <ContactUs />
    </div>
}

export default ParticularService;