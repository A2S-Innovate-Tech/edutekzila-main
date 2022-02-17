import AppleImg from "./assets/images/techs/apple.png";
import AndroidImg from "./assets/images/techs/android.png";
import IconicImg from "./assets/images/techs/iconic.png";
import ReactImg from "./assets/images/techs/react.png";
import HtmlImg from "./assets/images/techs/html.png";
import CssImg from "./assets/images/techs/css.png";
import JavascriptImg from "./assets/images/techs/javascript.png";
import NodejsImg from "./assets/images/techs/nodejs.png";
import MongodbImg from "./assets/images/techs/mongodb.png";
import PhotoshopImg from "./assets/images/techs/photoshop.png";
import IllustratorImg from "./assets/images/techs/illustrator.png";
import PremierProImg from "./assets/images/techs/premier_pro.png";
import AfterEffectsImg from "./assets/images/techs/after_effects.png";
import LighthouseImg from "./assets/images/techs/lighthouse.png";
import GoogleAnalyticsImg from "./assets/images/techs/google_analytics.png";
import GoogleTrendsImg from "./assets/images/techs/google_trends.png";

const services =  [
    {
        "category" : "Technical Services",
        "items" : [
            {
                id: 0,
                "title" : "App Development",
                "titleHtml" : <div><span className="Light-Blue">App</span> Development</div>,
                "description": "Customized application design that fulfil your needs at affordable prices. We developed your applications for any platform whether it is iOS or Android. ",
                "images" : [AppleImg,AndroidImg,IconicImg,ReactImg]
            },
            {
                id: 1,
                "title" : "Web Development",
                "titleHtml" : <div><span className="Light-Blue">Web</span> Development</div>,
                "description": "Our Team of experienced web developers ensure quality and perfection for each client. ",
                "images" : [HtmlImg,CssImg,JavascriptImg,MongodbImg,ReactImg]
            },
            {
                id: 2,
                "title" : "Graphic Development & Logo Designing",
                "titleHtml" : <div><span className="Light-Blue">Graphic</span> Development & <span className="Light-Blue">Logo</span> Designing</div>,
                "description": "Engaging graphics and Illustrations your Brand enhance its Virtual identity designed by our designers. ",
                "images" : [PhotoshopImg,IllustratorImg]
            },
            {
                id: 3,
                "title" : "Digital Marketing",
                "titleHtml" : <div><span className="Light-Blue">Digital</span> Marketing</div>,
                "description": "Digital Marketing services for the best price with a record of highest reach and exponential growth. ",
                "images" : [LighthouseImg,GoogleAnalyticsImg,GoogleTrendsImg]
            },
            {
                id: 4,
                "title" : "Video Editing",
                "titleHtml" : <div><span className="Light-Blue">Video</span> Editing</div>,
                "description": "Attractive video and motion graphics is only one step away at EduTekZila. ",
                "images" : [AfterEffectsImg,PremierProImg]
            }
        ]
    },
    {
        "category" : "Educational Services",
        "items" : [
            {
                id: 5,
                "title" : "Training Courses",
                "titleHtml" : <div><span className="Light-Blue">Training</span> Courses</div>,
                "description": "Training in dynamic fields with best in class course materials and guidancet. ",
                "images" : []
            },
            {
                id: 6,
                "title" : "Educational Coaching",
                "titleHtml" : <div><span className="Light-Blue">Educational</span> Coaching</div>,
                "description": "Coaching for almost every student regardless of stream at EduTekZila. ",
                "images" : []
            },
            {
                id: 7,
                "title" : "Career Counselling",
                "titleHtml" : <div><span className="Light-Blue">Career</span> Counselling</div>,
                "description": "Your go to Counsellor for heading to the right path in your success filled career. ",
                "images" : []
            },
            {
                id: 8,
                "title" : "Content Writing",
                "titleHtml" : <div><span className="Light-Blue">Content</span> Writing</div>,
                "description": "Effective and Articulative content writng for you at affordable prices. ",
                "images" : []
            }
        ]
    },
    
];

export default  services;