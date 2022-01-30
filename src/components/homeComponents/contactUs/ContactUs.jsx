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
                screenWidthState.screenWidth<1220
                ?  <div className="Contact-Us  Contact-Us-Mobile">
                        {
                            screenWidthState.screenWidth<1220 && <h1>
                                CONTACT US
                            </h1>
                        }
                        <div className="Info-Container">
                            <ContactForm />
                            <div className="Contact-Info-Mobile">
                                <img className="Google-Map" src={GoogleMapImg} alt="Google Map" />
                                <ContactInfo />
                            </div>
                            <div className="Copyright-Policy">
                                <p>Privacy Policy  |  Sitemap</p>
                                <p>Copyright © 2020 EduTekZila. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                :   <div className="Contact-Us">
                        <div className="Info-Container">
                            <h1>
                                CONTACT US
                            </h1>
                            
                            <ContactInfo />
                            
                            <div className="Copyright-Policy">
                                <p>Privacy Policy  |  Sitemap</p>
                                <p>Copyright © 2020 EduTekZila. All rights reserved</p>
                            </div>
                        </div>
                        <div className="Form-Container">
                            <img className="Google-Map" src={GoogleMapImg} alt="Google Map" />
                            <ContactForm />
                        </div>
                    </div>
            }
            
        </div>
        
    );
}

export default ContactUs;
