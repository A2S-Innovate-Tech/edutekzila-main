import './BlogCard.css';

function BlogCard({blog}) {
  return (
    <div className="Blog-Card">
        <img src={blog.img} alt="blog" />
        <div>
            <p className="Title Light-Blue Margin-B0 Margin-T0">{blog.title}</p>
            <p className="Description Margin-T0 P1">{blog.description}</p>
        </div>
    </div>
  );
}

export default BlogCard;
