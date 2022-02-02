import './BlogCard2.css';

function BlogCard2({blog}) {
    return (
        <div className="Blog-Card-2">
            <img src={blog.img} alt="blog" />
            <div>
                <p className="Title  Margin-T0">{blog.title}</p>
                <div className="Details">
                    <p><span style={{fontWeight: "bold"}}>Author :</span> {blog.author}</p>
                    <p>{blog.date} , {blog.duration}</p>
                    <p>{blog.views}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard2;
