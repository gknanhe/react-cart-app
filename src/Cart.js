import React from "react";
import CartItem from "./CartItem";



class Cart extends React.Component {
    constructor(){
        super(); // to call the constructor of inherited class (React. Componant)
        this.state = {
            products: [
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 10,
                    img: '',
                    id: 1
                },
                {
                    price: 99,
                    title: "Watch",
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: "Laptop",
                    qty: 4,
                    img: '',
                    id: 3
                },
            ]
           
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)   //can also work but messi
       
    }
    
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((product) => {
                    return  <CartItem product = {product} key={product.id} />
                    })
                }
                

            </div>
        )
    }
}


export default Cart;