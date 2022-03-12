import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const FoodDelivery = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    Food Delivery Solutions
                </h1>
            </div>

            {/* What We Do */}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Who</span> We Are <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    Stimulate Your Business Forward with On-Demand Food Delivery Solutions.
                </p>
                <p className="P1">
                    Food & Restaurant App/Website Development Company

                </p>
                <p className="P2">
                    Owning a restaurant is a dream of so many people, but it’s not easy to make this dream come true. Running a multi-location business requires diverse skills such as excellent culinary skills, effective sales and marketing strategy, detailed understanding of the local market, and outstanding customer service. 
                </p>
                <p className="P2">
                    So why not relieve yourself from the pressures of running your restaurant, while you can still reach out to your local customers?                 </p>
                <p className="P2">
                    Food delivery apps are becoming popular among consumers looking for convenience and ease of ordering. Zomato, Uber Eats and Postmates are few examples.
                </p>
                <p className="P1">
                    If you are any of the list below, we have solution for you.
                </p>
                <ul>
                    <li><p className="P2">A Chef</p></li>
                    <li><p className="P2">A Restaurant</p></li>
                    <li><p className="P2">Chain of Restaurant</p></li>
                    <li><p className="P2">Street Food Vendor</p></li>
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

export default FoodDelivery;