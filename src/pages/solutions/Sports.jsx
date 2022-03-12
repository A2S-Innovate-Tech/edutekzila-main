import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Sports = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Sports Solutions
                </h1>
            </div>

            {/* What We Do*/}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">What</span> We Do <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    We provide Sports Enterprise Mobility to Strength Your Sports Business.
                </p>
                
                <p className="P2">
                    Sports and Entertainment Mobility Solutions, custom-built for the business needs of sports organizations. In today’s rapidly changing technology landscape, sports associations and enterprises need to keep pace with the cutting edge of technology. Mobile and web-based platforms that leverage cloud computing, app development, and customized software are essential in acquiring new customers, maintaining relationships with season ticket holders, VIP sponsors, and generating additional revenue. EduTekZila is well positioned in the sports industry to serve the unique requirements that distinguish this market.
                </p>
                
            </div>

            <div className="Sub-Container">
                <h2 className="Heading">
                    <span className = "Light-Blue">Our Sports Development </span> Solutions <span className="Post-Heading-Line"></span>
                </h2>
                
                <ul className="P2">
                    <li><p className="P2">Sports News, Analytics</p></li>
                    <li><p className="P2">Personal app for Sports Players</p></li>
                    <li><p className="P2">Sports and Fitness App</p></li>
                    <li><p className="P2">Sports Venues & Booking Solutions</p></li>
                    <li><p className="P2">Online Sports Ticket Booking</p></li>
                    <li><p className="P2">Sports Coaching and Training App</p></li>
                    <li><p className="P2">Sports app for Sports Teams</p></li>
                    <li><p className="P2">Sports Team & League Management</p></li>
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

export default Sports;