export default function Footer () {
    return (
        <>
        <footer>
            <div className="footer-nav">
                <h5>Navigations</h5>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#reviews">Reviews</a>
                <a href="#shop">Shop</a>
            </div>
            <div className="locations">
                <h5>Locations</h5>
                <p>A Place</p>
                <p>Another Place</p>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <p>000-000-0000</p>
                <p>123 Main Street</p>
            </div>
            <div className="sign-up">
                <h5>Subscribe</h5>
                <p>Sign up for the latest information on offers and new products</p>
                <input type="email" />
                <button>SIGN UP</button>
                <p>Please <a href="" >click here</a> to unsubscribe</p>
            </div>
        </footer>
        </>
    )
}