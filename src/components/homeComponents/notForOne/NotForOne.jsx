import './NotForOne.css';
import Platform from './Platform';
import platforms from "../../../platforms.js"

function NotForOne() {
    return (
        <div className="Home-Sub-Container Not-For-One">
            <h2 className="Margin-B0">
                <span className = "Light-Blue">Not</span> For One
            </h2>
            <p>We can design for variety of platforms whether it is computers, smart watches, smartphones, wearables and many more .....</p>
            <div className="Platforms-Container">
                {
                    platforms.map((platform)=>{
                        return <Platform key={platform.title} platform={platform}/>
                    })
                }
            </div>
        </div>
    );
}

export default NotForOne;
