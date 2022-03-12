import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Healthcare = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Healthcare Solutions
                </h1>
            </div>

            {/* What We Do */}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Who</span> We Are <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">We are a Pioneering Digital Healthcare Solution Company.
                </p>
            </div>

            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Healthcare & Clinical </span> Digital Solutions. <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    Are you looking for clinical solutions that raise the patient experience while decreasing the cost? Would you like to revolutionize your healthcare and digital practice? We can help! Right now, our leading-edge technology is helping clients across the globe develop their digital strategy. From basic app development to a full suite of software tools, we can help to design your health practice for the future. Proudly serving all industries with passion and commitment.
                </p>

                <p className="P1">
                    If you are any of the list below, we have solution for you.
                </p>
                <ul>
                    <li><p className="P2"> Doctor </p></li>
                    <li><p className="P2">Nutritionist</p></li>
                    <li><p className="P2">Medical Firm</p></li>
                    <li><p className="P2">Hospital</p></li>
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

export default Healthcare;