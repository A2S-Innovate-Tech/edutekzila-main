import './ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import BehanceImg from "../../../assets/images/social_media/behance.png";
import InstagramImg from "../../../assets/images/social_media/instagram.png";
import FacebookImg from "../../../assets/images/social_media/facebook.png";
import DribbbleImg from "../../../assets/images/social_media/dribbble.png";
import LinkedinImg from "../../../assets/images/social_media/linkedin.png";

function ContactInfo() {
    return (
        <div className="Contact-Info-Grid">
            <div className="Grid-Item">
                <FontAwesomeIcon icon={ faDotCircle } size="lg"/>
            </div>
            <div className="Grid-Item">
                <h3>Our Address</h3>
                <p>Noida, Uttar Pradesh</p>
                <p>+918766330253</p>
            </div>
            <div className="Grid-Item">
                <FontAwesomeIcon icon={ faDotCircle } size="lg"/>
            </div>
            <div className="Grid-Item">
                <h3>Work Enquiry</h3>
                <p>contact@edutekzila.tech</p>
                <p>+918766330253</p>
            </div>
            <div className="Grid-Item">
                <FontAwesomeIcon icon={ faDotCircle } size="lg"/>
            </div>
            <div className="Grid-Item">
                <h3>Follow us on</h3>
                <div>
                    <img className="Social-Media" src={BehanceImg} alt="BehanceImg" />
                    <img className="Social-Media" src={InstagramImg} alt="InstagramImg" />
                    <img className="Social-Media" src={DribbbleImg} alt="DribbbleImg" />
                    <img className="Social-Media" src={LinkedinImg} alt="LinkedinImg" />
                    <img className="Social-Media" src={FacebookImg} alt="FacebookImg" />
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
