import { Link } from "react-router"

export default function Header () {
    return (
        <>
        <header>
        <Link to="/" className="logo">Sunny Candy</Link>
            <nav id="nav-bar">  
                <Link to="/">Home</Link>
                <Link 
                    to="reviews"
                >
                    Reviews
                </Link>
                <Link to="/shop">Shop</Link>
            </nav>
       </header>
        </>
    )
}