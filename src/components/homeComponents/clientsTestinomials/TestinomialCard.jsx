import './TestinomialCard.css';
import CommaUpBlue from "../../../assets/images/commas/comma_up_blue.png";
import CommaUpWhite from "../../../assets/images/commas/comma_up_white.png";
import CommaDownBlue from "../../../assets/images/commas/comma_down_blue.png";
import CommaDownWhite from "../../../assets/images/commas/comma_down_white.png";

function TestinomialCard({testinomial}) {
  return (
    <div className="Testinomial-Card">
        <div className="Commas Commas-Up">
            <img src={CommaUpBlue} alt="comma" />
            <img src={CommaUpWhite} alt="comma" />
        </div>
        <p className="Testinomial-Text Margin-T0 Margin-B0">
            {testinomial.content}
        </p>
        <div className="Commas Commas-Down">
            <img src={CommaDownBlue} alt="comma" />
            <img src={CommaDownWhite} alt="comma" />
        </div>
        <div className="Client-Profile">
            <img src={testinomial.img} alt="user pic" />
            <div>
                <h4 className="Margin-T0 Margin-B0">
                    {testinomial.name}
                </h4>
                <p  className="Light-Blue Margin-T0 Margin-B0" >
                    {testinomial.designation}
                </p>
            </div>
        </div>
        
    </div>
  );
}

export default TestinomialCard;
