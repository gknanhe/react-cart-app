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

    //Handle decrese Quantity
    handleDecreaseQuantity = (product) => {
        console.log('Hey plz decrease the quantity of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0) {
            return
        }
        products[index].qty -= 1;

        //setState 
        this.setState({
            products: products,
        })
       }

       //handle on delete
       handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => {
            return item.id !== id ;
        });

        this.setState({
            products: items
        })
       }

    render(){

        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((product) => {
                    return  <CartItem 
                    product = {product} 
                    key={product.id} 
                    onIncreaseQuantity = {this.handleIncreaseQuantity} 
                    onDecreaseQuantity = {this.handleDecreaseQuantity}  
                    onDeleteProduct = {this.handleDeleteProduct}  

                    />
                    })
                }
                

            </div>
        )
    }
}


export default Cart;