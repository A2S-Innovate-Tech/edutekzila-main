import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Entertainment = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Media and Entertainment Solutions
                </h1>
            </div>
            

            {/* What We Do*/}
            <div className="Sub-Container">
                
                <p className="P1">
                    Mobility as a tool is changing the education sector across all levels and aspects of education in all parts of the world. EI is helping colleges, universities, institutions and schools leverage mobile technology to accelerate learning and improve their bottom line.                </p>
                <p className="P1">
                    We provide the best mobile solutions for Education. We are winning because of our team – it’s filled with people who have a hunger for success. It permeates everything we do.                </p>
                
            </div>

            <div className="Sub-Container">
                <h2 className="Heading">
                    <span className = "Light-Blue">Our Education App Development </span> Solutions <span className="Post-Heading-Line"></span>
                </h2>
                
                <ul className="P2">
                    <li><p className="P2">eBook Learning App</p></li>
                    <li><p className="P2">Online Training Apps</p></li>
                    <li><p className="P2">E-Library App Solutions</p></li>
                    <li><p className="P2">Education Gaming App</p></li>
                    <li><p className="P2">Learning App for Coaching Classes</p></li>
                    <li><p className="P2">Learning App for Nursery & Preschool</p></li>
                    <li><p className="P2">Mobility Solution for College & University</p></li>
                    <li><p className="P2">Knowledge-based Entertainment App</p></li>
                    <li><p className="P2">Education Management Solution</p></li>
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
                We partner with our clients to understand their unique Entertainment context and create custom software that turns their "secret sauce" into an enhanced competitive edge. We have in-house expertise in the most sustainable, adaptable technologies and platforms.
            </p>
            <GetQuoteForm />
        </div>
    </div>
}

export default Entertainment;