import { Link } from "react-router"

function Home () {
    return (
        <>
        <div id="home">
            <h3>Surreal, Satisfying, Sweet</h3>
            <p>Soothe away your stress with Sunny Candy</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
            <div className="box">
                <p className="box-child">No artificial sweeetners</p>
                <p className="box-child">Environmentally conscious</p>
                <p className="box-child">Healthy, and packed with taste</p>
            </div>
        </div>

        <div id="about">
            <h3>Who Are We?</h3>
            <p>We're dedicated to providing bursts of sweetness to lighten up your day
            while remaining health and environmentally conscious.
            </p>
            <div className="container">
                <section className="child">
                    <div className="img-container">
                        <img src="/images/choc-drip.jpg"/>
                    </div>
                    
                    <div className="description">
                        <h3 className="first">Our Chocolates</h3>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis dolore quis accusantium, cumque iste dignissimos maxime consequuntur repellendus est, recusandae vel eius. Animi vitae ipsa laboriosam veniam, nihil voluptatem?</p>
                    </div>
                </section>
                <section className="child">
                    <div className="img-container">
                        <img src="/images/licorice.jpg" />
                    </div>
                    
                    <div className="description">
                        <h3 className="first">Our Licorice</h3>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis dolore quis accusantium, cumque iste dignissimos maxime consequuntur repellendus est, recusandae vel eius. Animi vitae ipsa laboriosam veniam, nihil voluptatem?</p>
                    </div>
                </section>
                <section className="child">
                    <div className="img-container">
                        <img src="/images/lollie.jpg" />
                    </div>
                    
                    <div className="description">
                        <h3 className="first">Our Lollies</h3>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis dolore quis accusantium, cumque iste dignissimos maxime consequuntur repellendus est, recusandae vel eius. Animi vitae ipsa laboriosam veniam, nihil voluptatem?</p>
                    </div>
                </section>
                <section className="child">
                    <div className="img-container">
                        <img src="/images/candy.jpg" />
                    </div>
                    <div className="description">
                        <h3 className="first">For every Burst of Flavour... </h3>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis dolore quis accusantium, cumque iste dignissimos maxime consequuntur repellendus est, recusandae vel eius. Animi vitae ipsa laboriosam veniam, nihil voluptatem?</p>
                    </div>
                </section>
            </div>
            <Link to="/shop" className="shop-link">Shop Now</Link>
        </div>
           
        </>
    )
}

export default Home 