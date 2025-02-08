import { Link } from "react-router"

function Reviews () {
    return (
        <>
        <div id="reviews">
            <h3>Hear from other Sunnies</h3>
            <div className="review-container">
                <div className="review">
                    <p>5 stars</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p>Jane Doe</p>
                </div>
                <div className="review">
                    <p>5 stars</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <p>John Doe</p>
                </div>
                <div className="review">
                    <p>5 stars</p>
                    <p>Lorem ipsum dolor sit amet!</p>
                    <p>Mary Sue</p>
                </div>
            </div>
            
            <Link to="/shop" className="shop-link">Shop Now</Link>
        </div>
        </>
    )
}

export default Reviews 