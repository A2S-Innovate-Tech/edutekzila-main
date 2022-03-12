import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const SocialNetworking = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Social Networking Solutions
                </h1>
            </div>

            {/* What We Do*/}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">What</span> We Do <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    We are a professional social media app development company.
                </p>
                
                <p className="P2">
                    We are a professional social media app development company. We specialize in designing, developing and deploying high quality applications and managing your online business with our community management services. Our history of content related design, video production and graphic design experience has been the foundation for what we do today.
                </p>
                
            </div>

            <div className="Sub-Container">
                <h2 className="Heading">
                    <span className = "Light-Blue">Our Social Networking Development </span> Solutions <span className="Post-Heading-Line"></span>
                </h2>
                
                <ul className="P2">
                    <li><p className="P2">Forum, Blogging, Publishing Apps</p></li>
                    <li><p className="P2">Social Networking App Development</p></li>
                    <li><p className="P2">Women's Social Networking Apps</p></li>
                    <li><p className="P2">Sites for Shopping, Consumer Review</p></li>
                    <li><p className="P2">Media Sharing Social Apps</p></li>
                    <li><p className="P2">Relationship Based Apps</p></li>
                    <li><p className="P2">Career-based Apps</p></li>
                    <li><p className="P2">Dating App Development</p></li>
                    <li><p className="P2">Social Media Apps for Friends</p></li>
                    <li><p className="P2">Community App Development</p></li>
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

export default SocialNetworking;