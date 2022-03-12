import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Travel = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Travel Solutions
                </h1>
            </div>

            {/* Who We Are*/}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Who</span> We Are <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    We provide Mobility Solutions for Travel Industry.
                </p>
                
                <p className="P2">
                    We offer mobility solutions and partner program to world-class travel organizations.Our mobile app has over 25,000 users, and hundreds of organizations trust us when it comes to ground transportation planning. We are proud to say that our team is composed of engineers, product managers and supply specialists who foresee the mobility industry and build technology products for everyone to use.
                </p>
                
            </div>

            <div className="Sub-Container">
                <h2 className="Heading">
                    <span className = "Light-Blue">Our Travel Moble App Development & Clinical </span> Solutions <span className="Post-Heading-Line"></span>
                </h2>
                
                <ul className="P2">
                    <li><p className="P2">Travel Planning Solution </p></li>
                    <li><p className="P2">Travel Guide Solution</p></li>
                    <li><p className="P2">Ticket Booking Solution</p></li>
                    <li><p className="P2">Check-in and Boarding Solution</p></li>
                    <li><p className="P2">Hotel Booking Solution</p></li>
                    <li><p className="P2">Vehicle(Taxi/Bus) Rental Solution</p></li>
                    <li><p className="P2">Travel Management Solution</p></li>
                </ul>
                
            </div>

            {/* Why Choose Us */}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Why </span> Choose Us <span className="Post-Heading-Line"></span>
                </h2>

                <div className="Box">
                    <div className="item">
                        <p className="P1 Margin-B0"> Quality Assured  </p>
                        <p className="P2">
                            We at EduTekZila have an utmost aim of providing best quality services to our clients.
                        </p>
                    </div>

                    <div className="item">
                        <p className="P1 Margin-B0"> Cost Effective </p>
                        <p className="P2">
                        We provide all services at less than 5% of market cost.
                        </p>
                    </div>

                    <div className="item">
                        <p className="P1 Margin-B0"> On-Time Delivery </p>
                        <p className="P2">
                        We make sure your requirement is fulfilled before the quoted deadline.
                        </p>
                    </div>
                    <div className="item">
                        <p className="P1 Margin-B0"> Proven Track Record  </p>
                        <p className="P2">
                        We've proven track record to provide excellent services with 5 star reviews.
                        </p>
                    </div>
                </div>
            </div>
            <p className="P2" style={{marginBottom:"50px", marginTop: "30px"}}>
                We partner with our clients to understand their unique business context and create custom software that turns their "secret sauce" into an enhanced competitive edge. We have in-house expertise in the most sustainable, adaptable technologies and platforms.
            </p>
            <GetQuoteForm />
        </div>
    </div>
}

export default Travel;