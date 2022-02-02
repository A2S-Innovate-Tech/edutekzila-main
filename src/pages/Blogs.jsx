import "./Blogs.css";
import BlogImg1 from "../assets/images/blogs/img_1.png";
import BlogImg2 from "../assets/images/blogs/img_2.png";
import BlogImg3 from "../assets/images/blogs/img_3.png";
import BlogCard2 from "../components/blogsComponents/BlogCard2";

const Blogs = () =>{

    const blog = {
        img: BlogImg2,
        title: "Best UI/UX Practises follows by UI/UX Designers",
        author: "Rahul Sharma",
        date: "July 18",
        duration: "8 mins read",
        views: "2K Views"
    }

    return <div>
        <div className="Blogs-Container">
            <div className="Blogs-Sub-Container">
                <div>
                    <h1 className="Top-Heading">
                        <span className = "Dark-Blue">OUR</span> <span className = "Light-Blue">BLOGS</span>
                    </h1>
                    <img className="Img-Top" src={BlogImg1} alt="blog-img" />
                    <p className="Blog-Title Margin-B0">
                        Best UI/UX Practises
                    </p>
                    <p className="Blog-Description">
                        Take a leap and learn all of the best UI/UX practises used in the UI/UX industry with this blog...............
                    </p>
                    <div className="Blog-Details">
                        <div>
                            <p>
                                <span style={{fontWeight: "bold"}}>Author :</span> Shivam Varshney
                            </p>
                            <p>
                                25 July 2021 • 7 mins read
                            </p>
                        </div>
                        <p>
                            2098 Views , 150 Likes 
                        </p>
                    </div>
                </div>
                <div >
                    <BlogCard2 blog={blog} />
                    <BlogCard2 blog={blog} />
                    <BlogCard2 blog={blog} />
                    <BlogCard2 blog={blog} />
                </div>
            </div>
        </div>


    </div>
}

export default Blogs;