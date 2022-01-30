import "./Blogs.css";

import { useState } from "react";

const Blogs = () =>{
    const [projectCategory,setProjectCategory] = useState("All");

    return <div>
        <div className="Blogs-Container">
            <div className="Top-Heading">
                <h1>
                    OUR <span className = "Light-Blue">BLOGS</span>
                </h1>
            </div>
        </div>

    </div>
}

export default Blogs;