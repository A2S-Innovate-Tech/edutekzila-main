import './ContactUs.css';

import GoogleMapImg from "../../../assets/images/google_map.png";
import { useContext } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ScreenWidthContext from '../../../context/ScreenWidthContext';

function ContactUs() {
    const screenWidthState = useContext(ScreenWidthContext);
   
    return (
        <div>
            {
                screenWidthState.screenWidth<1260
                ?  <div className="Contact-Us  Contact-Us-Mobile" id="ContactUs">
                        {
                            screenWidthState.screenWidth<1260 && <h1 className="Top-Heading">
                                CONTACT US
                            </h1>
                        }
                        <div className="Info-Container">
                            <ContactForm />
                            <div className="Contact-Info-Mobile">
                            <a href="https://goo.gl/maps/3ErnW2qakEsrizsP6" target="_blank" rel="noopener noreferrer">
                                <img  className="Google-Map" src={GoogleMapImg} alt="Google Map" />
                            </a>
                                <ContactInfo />
                            </div>
                            <div className="Copyright-Policy">
                                <p>Privacy Policy  |  Sitemap</p>
                                <p>Copyright © {new Date().getFullYear()} EduTekZila. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                :   <div className="Contact-Us">
                        <div className="Info-Container">
                            <h1 className="Top-Heading">
                                CONTACT US
                            </h1>
                            
                            <ContactInfo />
                            
                            <div className="Copyright-Policy">
                                <p>Privacy Policy  |  Sitemap</p>
                                <p>Copyright © {new Date().getFullYear()} EduTekZila. All rights reserved</p>
                            </div>
                        </div>
                        <div className="Form-Container">
                            <a href="https://goo.gl/maps/3ErnW2qakEsrizsP6" target="_blank" rel="noopener noreferrer">
                                <img  className="Google-Map" src={GoogleMapImg} alt="Google Map" />
                            </a>
                            <ContactForm />
                        </div>
                    </div>
            }
            
        </div>
        
    );
}

export default ContactUs;
