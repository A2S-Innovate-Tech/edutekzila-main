import "./Home.css";

import SuccessStories from "../components/homeComponents/successStories/SuccessStories";
import WhoWeAre from "../components/homeComponents/whoWeAre/WhoWeAre";
import OurExpertise from "../components/homeComponents/ourExpertise/OurExpertise";
import OurServices from "../components/homeComponents/ourServices/OurServices";
import NotForOne from "../components/homeComponents/notForOne/NotForOne";
import OurWork from "../components/homeComponents/ourWork/OurWork";
import ClientsTestinomials from "../components/homeComponents/clientsTestinomials/ClientsTestinomials";
import OurBlogs from "../components/homeComponents/ourBlogs/OurBlogs";
import ContactUs from "../components/homeComponents/contactUs/ContactUs";

const Home = () =>{
    
    return <div>
        <div className="Home-Container">
            {/* WE WORK ON 4D PROCESS         */}
            <div className="Home-Sub-Container Top-Heading">
                <h2>
                    WE, WORK ON 4D PROCESS
                </h2>
                <h1 className = "Light-Blue">
                    DISCUSS
                </h1>
                <h1>
                    <span className = "Light-Blue">DESIGN</span> DEVELOP
                </h1>
                <h1 className = "Light-Blue">
                    DELIVER
                </h1>
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

export default Home;