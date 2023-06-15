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
       
    }
    //Handle increse Quantity
    handleIncreaseQuantity = (product) => {
        console.log('Hey plz increase the quantity of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        //setState 
        this.setState({
            products: products,
        })
       }

    render(){

        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((product) => {
                    return  <CartItem product = {product} key={product.id} onIncreaseQuantity = {this.handleIncreaseQuantity} />
                    })
                }
                

            </div>
        )
    }
}


export default Cart;