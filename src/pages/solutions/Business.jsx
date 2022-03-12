import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Business = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Business Solutions
                </h1>
            </div>

            {/* What We Do*/}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">What</span> We Do <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    We provide business mobile/web App development solutions.
                </p>
                <p className="P1">
                    Business Mobile App Development
                </p>
                <p className="P2">
                    Unlike many agencies that are experienced in mobile app development, but also work in other fields, our company specializes in mobile apps. This gives us a superior technological and strategic advantage over our competitors in developing innovative solutions for your business. 
                </p>
                <p className="P2">
                    Choose us for a fully committed team dedicated to giving you the best mobile app for your business. As technology continues to evolve rapidly, so do the ways we connect with customers. Mobile will continue to be a game changer: Gartner Research predicts that by 2017, more than 268 billion downloads will generate $77 billion in revenue!                </p>
                <p className="P2">
                    We can help you take advantage of these growing possibilities by creating new avenues of communication with your customers, helping you increase brand visibility and loyalty, and creating new mobile commerce opportunities.                </p>
                
            </div>

            <div className="Sub-Container">
                <h2 className="Heading">
                    <span className = "Light-Blue">Our Business </span> Solutions <span className="Post-Heading-Line"></span>
                </h2>
                
                <ul className="P2">
                    <li><p className="P2">Factories & Processing House</p></li>
                    <li><p className="P2">HR Consultancy Multinationals</p></li>
                    <li><p className="P2">Business Apps for Dairy</p></li>
                    <li><p className="P2">Fashion Business & Beauty Saloons</p></li>
                    <li><p className="P2">Courier Services Agencies</p></li>
                    <li><p className="P2">Matrimonial Services & Agencies</p></li>
                    <li><p className="P2">Sales & Marketing</p></li>
                    <li><p className="P2">Business Apps for Large Business</p></li>
                    <li><p className="P2">SAccounting Professionals</p></li>
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

export default Business;