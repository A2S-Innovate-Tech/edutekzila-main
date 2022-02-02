import "./NewsletterCard.css";

const NewsletterCard = () =>{
    return <div className="Newsletter-Card">
        <div>
            <h2 className="Heading Top-Heading">
                Subscribe to our newsletter
            </h2>
            <p>
                Get the latest updates on design, development, and technology trends right in your inbox.
                Get the latest updates on design, development, and technology trends right in your inbox.
            </p>
            <div className="Form">
                <form action="">
                    <input type="text" placeholder="Enter your email address" />
                    <button>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default NewsletterCard;