import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Fitness = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Fitness Solutions
                </h1>
            </div>

            {/* Who We Are */}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Who</span> We Are <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    We are a proven destination for comprehensive Digital Fitness Solutions.
                </p>
                <p className="P1">
                    Let your Business Fly High with Exemplary Fitness App Development.
                </p>
                <p className="P2">
                    We are a proven destination for comprehensive Digital Fitness Solutions. With a perfect blend of innovative and enchanting mobility solutions, we are known to offer seamless support and an incredible user experience. Our cost-effective yet quality-centric services have created a strong clientele base in the US, UK, UAE, Germany and Australia. Our top-notch fitness app development services render highly engaging applications that are deployed with rich and real-time information on health, exercise, workout routines and diet plan.
                </p>
                <p className="P1">
                    If you are any of the list below, we have solution for you.
                </p>
                <ul>
                    <li><p className="P2">Gym Owner</p></li>
                    <li><p className="P2">Yoga Guru</p></li>
                    <li><p className="P2">Personal Trainer</p></li>
                    <li><p className="P2">Dietitian</p></li>
                </ul>
            </div>

            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Mobility Solutions </span> for Fitness Industry<span className="Post-Heading-Line"></span>
                </h2>
                <ul>
                    <li><p className="P2">Fitness Tracking App</p></li>
                    <li><p className="P2">Wearable Fitness App</p></li>
                    <li><p className="P2">App of Yoga Centers</p></li>
                    <li><p className="P2">Diet & Nutrition App</p></li>
                    <li><p className="P2">Personal Trainers App</p></li>
                    <li><p className="P2">Workout OR Exercise App</p></li>
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

export default Fitness;