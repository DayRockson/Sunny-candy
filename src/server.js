import { createServer } from "miragejs";

export function makeServer() {
    let server = createServer({
    routes() {
        this.namespace = "api";
        
        this.get("/products", () => {
        return {
            products: [
            {
                category: "chocolate",
                items: [
                { name: "Choco-squares", description: "Hazelnut infused chocolate squares", price: 10.00, image: "/images/choc-stack.jpg", alt: "Hazelnut Chocolate Squares" },
                { name: "Chocolate Bars", description: "Creamy milk chocolate bar", price: 10.00, image: "/images/choc-bar.jpg", alt: "Milk Chocolate Bar" },
                { name: "Chocolate Box", description: "An assortment of chocolates", price: 30.00, image: "/images/choc-box.jpg", alt: "Box of Chocolates" },
                { name: "Chocolate Truffles", description: "Rich chocolate truffles", price: 25.99, image: "/images/choc-truffle.jpg", alt: "Chocolate Truffles" },
                { name: "Chocolate Cups", description: "Delicious peanut butter chocolate cups", price: 10.49, image: "/images/choc-cup.jpg", alt: "Chocolate Cups" }
                ]
            },
            {
                category: "gummies",
                items: [
                { name: "Fruit Gummies", description: "Assorted fruity gummies ", price: 10.99, image: "/images/mixed-fruit.jpg", alt: "Gummy Candies" },
                { name: "Sour Worms", description: "Tangy and sour gummy worms", price: 4.49, image: "/images/gummies1.jpg", alt: "Sour Worms" },
                { name: "Gummy Pack", description: "Pack of sweet and sour gummies", price: 10.00, image: "/images/gummies2.jpg", alt: "Pack of Gummies" },
                { name: "Citrus Slices", description: "Sweet and juicy citrus gummies", price: 7.00, image: "/images/fruit-gummies1.jpg", alt: "Citrus Slices" },
                { name: "Mixed Set", description: "Delicious set of mixed candy", price: 20.00, image: "/images/mixed.jpg", alt: "Set of Mixed Candy" }
                ]
            },
            {
                category: "lollies",
                items: [
                { name: "Cherry Lollipops", description: "Sweet cherry-flavored lollipops", price: 2.00, image: "/images/lollie1.jpg", alt: "Cherry Lollipops" },
                { name: "Sunset Swirl", description: "Two swirl lollipops", price: 3.49, image: "/images/lollie-swirl1.jpg", alt: "Sunset Swirl" },
                { name: "Swirl Duo", description: "Two sets of two swirl lollipops", price: 5.00, image: "/images/lollie-swirl2.jpg", alt: "Swirl Lollipops" },
                { name: "All the Lollies", description: "Ultimate set of 10 flavours", price: 9.99, image: "/images/lollie-stack.jpg", alt: "Set of Lollipops" }
                ]
            },
            {
                category: "licorice",
                items: [
                { name: "Licorice Twists Set", description: "Delightful licorice twists", price: 10.99, image: "/images/licorice-tree.jpg", alt: "Licorice Twists" }
                ]
            }
            ]
        };
        });
    }
    });

  return server;
}