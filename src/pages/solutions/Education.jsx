import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Educational = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Educational Solutions
                </h1>
            </div>
            

            {/* What We Do*/}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">What</span> We Do <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    We provide mobility solution for media and entertainment industry.
                </p>
                <p className="P2">
                    Transportation of your crew and equipment across town, across country, or around the globe can be a major headache. The amount of planning, coordination and execution required to transport hundreds of people and tons of equipment can be mind numbing–all while keeping everyone on time, on budget and safe. That’s where EduTekZila comes in.
               </p>
                
            </div>

            <div className="Sub-Container">
                <h2 className="Heading">
                    <span className = "Light-Blue">Our Entertainment App Development </span> Solutions <span className="Post-Heading-Line"></span>
                </h2>
                
                <ul className="P2">
                    <li><p className="P2">App for Gaming Industry</p></li>
                    <li><p className="P2">Video App Development</p></li>
                    <li><p className="P2">App for Movie Studio</p></li>
                    <li><p className="P2">Mobility Solution for Creative Studio</p></li>
                    <li><p className="P2">Music App Development</p></li>
                    <li><p className="P2">Movie Streaming App Development</p></li>
                    <li><p className="P2">News Apps for Publishers</p></li>
                    <li><p className="P2">Photo Editing App Development</p></li>
                    <li><p className="P2">App for Media Houses, Publishers, Magazines, etc.</p></li>
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
                We partner with our clients to understand their unique Educational context and create custom software that turns their "secret sauce" into an enhanced competitive edge. We have in-house expertise in the most sustainable, adaptable technologies and platforms.
            </p>
            <GetQuoteForm />
        </div>
    </div>
}

export default Educational;