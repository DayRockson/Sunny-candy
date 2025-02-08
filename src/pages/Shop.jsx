import { useState, useEffect } from "react"
import ScrollToTop from "../ScrollToTop";


function Shop () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [addedItems, setAddedItems] = useState({});

    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const addToCart = (item) => {
        setCartItems((prevCart) => {
          const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
          if (existingItem) {
            return prevCart.map(cartItem =>
              cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
          }
          return [...prevCart, { ...item, quantity: 1 }];
        });

        setAddedItems(prevState => ({ ...prevState, [item.name]: true }));
        
        setTimeout(() => {
            setAddedItems(prevState => ({ ...prevState, [item.name]: false }));
        }, 3000);
    };
    
    const increaseQuantity = (name) => {
        setCartItems((prevCart) =>
          prevCart.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item)
        );
    };
    
    const decreaseQuantity = (name) => {
        setCartItems((prevCart) =>
          prevCart.map(item =>
            item.name === name ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          )
        );
    };
    
    const removeFromCart = (name) => {
        setCartItems((prevCart) => prevCart.filter(item => item.name !== name));
    };
    
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (loading) return <p
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}
        >
            Loading products...
        </p>;

    return (
        <>
        <div id="shop">
            <ScrollToTop />
            
                <div className="icon-container">
                <h3>Have a Taste!</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart icon" viewBox="0 0 16 16" onClick={() => setCartOpen(!cartOpen)} style={{ marginLeft: "20px" }}>
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg> 
                {totalItems > 0 && (
                    <span className="quantity">{totalItems}</span>
                )}
                </div>
                          
            
            {products.map((category) => (
                <div key={category.category}>
                <h4>{category.category.toUpperCase()}</h4>
                <div  className="shop-container">
                    {category.items.map((item) => (
                    <div key={item.name}  className="shop-items">
                        <img src={item.image} alt={item.alt}  className="product-img" />
                        <p className="title">{item.name}</p>
                        <p className="content">{item.description}</p>
                        <p className="price"><strong>${item.price.toFixed(2)}</strong></p>
                        <button className="cart-btn" onClick={() => addToCart(item)}>{addedItems[item.name] ? "Added!" : "Add to Cart"}</button>
                    </div>
                    ))}
                </div>
                </div>
            ))}
        </div>
        <div
            className="cart-tab"
            style={{
            position: "fixed",
            top: 0,
            right: cartOpen ? 0 : "-400px",
            width: "400px",
            height: "100%",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.5)",
            transition: "right 0.3s ease-in-out",
            padding: "20px"
            }}
        >
            <h2>Your Cart</h2>
            <div className="scroll"> 
                <ul style={{ listStyle: "none", padding: 0 }}>
                {cartItems.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <img src={item.image} alt={item.alt} style={{ width: "100px", height: "100px", marginRight: "10px" }} />
                    <div>
                        <p style={{ margin: 0 }}><strong>{item.name}</strong></p>
                        <p style={{ margin: 0 }}>${item.price.toFixed(2)}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <button onClick={() => decreaseQuantity(item.name)} className="item-btn">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.name)} className="item-btn">+</button>
                            <img 
                                src="https://img.icons8.com/material-outlined/24/filled-trash.png" alt="filled-trash"
                                onClick={() => removeFromCart(item.name)} className="delete"
                            />
                        
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            <div style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>
                Total price is: ${totalPrice.toFixed(2)}
            </div>
            <div className="btn">
                <button className="close" onClick={() => setCartOpen(false)}>Close</button>
                <button className="check-out">Check Out</button>
            </div>
            
      </div>
        </>
    )
}

export default Shop 