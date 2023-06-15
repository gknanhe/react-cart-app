import React from "react";
// import CartItem from "./CartItem";
import Navbar from "./Navbar";
import Cart from "./Cart";

class App extends React.Component {

    constructor() {
      super(); // to call the constructor of inherited class (React. Componant)
      this.state = {
        products: [
          {
            price: 999,
            title: "Mobile Phone",
            qty: 10,
            img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id: 1
          },
          {
            price: 99,
            title: "Watch",
            qty: 1,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            id: 2
          },
          {
            price: 9999,
            title: "Laptop",
            qty: 4,
            img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwZm9yJTIwc2FsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 3
          },
        ]

      }

    }
    //Handle increse Quantity
    handleIncreaseQuantity = (product) => {
      console.log('Hey plz increase the quantity of ', product);
      const { products } = this.state;
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
      const { products } = this.state;
      const index = products.indexOf(product);

      if (products[index].qty === 0) {
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
        return item.id !== id;
      });

      this.setState({
        products: items
      })
    }

    getCartCount = () => {
      const {products} =this.state;

      let count = 0;

      products.forEach((product)=>{
        count += product.qty;
      });

      return count;
    }

    getTotalPrice = ()=>{
      const {products} = this.state;

      let cartTotal =0;

      products.forEach((product)=>{
        cartTotal = cartTotal + product.qty * product.price;
      });
      return cartTotal;
    }

  render(){
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar  count = {this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize: 20 , padding: 10}}>Total: {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
