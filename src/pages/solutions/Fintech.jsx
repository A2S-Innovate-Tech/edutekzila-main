import "./Solutions-Common.css";

import GetQuoteForm from "../../components/widgets/GetQuoteForm";
const Fintech = () =>{

    return <div>
        <div className="Solutions-Container">
            <div className="Sub-Container Top-Heading">
                <h1>
                    FINTECH
                </h1>
            </div>

            {/* WHO WE ARE */}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">Who</span> We Are <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">The One-Stop Shop for All Your Fintech and Banking Needs.
                    <br />Digital First Banking and Fintech Services Company.
                </p>
                <p className="P2">We are a global digital banking and fintech services company, serving businesses and consumers with a range of innovative technologies that transform how people bank and access financial services.
                </p> <br />
                <p className="P2"> Our products and solutions focus on enabling companies to provide banking and other financial services faster, more efficiently, more securely and with more personalization for their customers. Our offerings allow banks to deliver a better experience for customers as well as help them achieve their business goals through the power of technology.
                </p>
            </div>

            {/* WHAT IS FINTECH */}
            <div className="Sub-Container">
                <h2 className="Heading Margin-B0">
                    <span className = "Light-Blue">What</span> Is Fintech? <span className="Post-Heading-Line"></span>
                </h2>
                <p className="P1">
                    Fintech is the new innovative technology that is driving the financial industry to new destinations with uncompromising security features. The emergence of Fintech has rejuvenated the Banking Sector where users are facilitated with all banking functions 24x7. Even the Cryptocurrency and Blockchain have been the biggest game-changer for the financial industry allowing user to send or receive the digital currency and monitor the balance.
                </p>
                <ul>
                    <li><p className="P2">Payment Gateway</p></li>
                    <li><p className="P2">Banking Wallet</p></li>
                    <li><p className="P2">POS Solutions</p></li>
                    <li><p className="P2">App for Finance Company</p></li>
                    <li><p className="P2">Corporate Banking App</p></li>
                    <li><p className="P2">Crypto Wallet</p></li>
                </ul>
            </div>

            {/* Why Choose Us */}
            <div className="Sub-Container Why-Choose-Us">
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

export default Fintech;