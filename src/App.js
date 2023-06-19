import React from "react";
// import CartItem from "./CartItem";
import Navbar from "./Navbar";
import Cart from "./Cart";
import firebase from 'firebase/compat/app';


class App extends React.Component {

    constructor() {
      super(); // to call the constructor of inherited class (React. Componant)
      this.state = {
        products: [
          // {
          //   price: 999,
          //   title: "Mobile Phone",
          //   qty: 10,
          //   img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          //   id: 1
          // },
        
        ],

        loading: true

      }

       this.db = firebase.firestore();

    }

    componentDidMount(){

      // firebase
      //   .firestore()
      //   .collection('products')
      //   .get()
      //   .then((snapshot) => {
      //     console.log(snapshot);

      //     const products = snapshot.docs.map((doc)=>{
      //       console.log(doc.data());
      //       const data = doc.data();

      //       data['id'] = doc.id;

      //       return data;
      //     });

      //     this.setState({
      //       products,
      //       loading: false
      //     });

      //   });



      this.db
        .collection('products')
        //query to filter also can add multiple queries
        // .where('price', '==', '99')
        // .where('title','==', 'Watch')
        // .where('title','==', 'Mobile Phone')
        // .where('price', '<=', '99')

        // .orderBy('price')    // assending order by default
        .orderBy('price','desc')
        .onSnapshot((snapshot) => {
          console.log(snapshot);

          const products = snapshot.docs.map((doc)=>{
            console.log(doc.data());
            const data = doc.data();

            data['id'] = doc.id;

            return data;
          });

          this.setState({
            products,
            loading: false
          });

        })
    }

    //Handle increse Quantity
    handleIncreaseQuantity = (product) => {
      // console.log('Hey plz increase the quantity of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);
      // products[index].qty += 1;

      // //setState 
      // this.setState({
      //   products: products,
      // })

      //Update at firebase
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
        qty: products[index].qty + 1
        })
        .then(()=>{
          console.log('product updated')
        })
        .catch((error)=>{
          console.log('Error ', error);
        })

    }

    //Handle decrese Quantity
    handleDecreaseQuantity = (product) => {
      // console.log('Hey plz decrease the quantity of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if (products[index].qty === 0) {
        return
      }

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
        qty: products[index].qty - 1
        })
        .then(()=>{
          console.log('updated succesfuly')
        })
        .catch((error)=>{
          console.log('Error ', error);
        })

      // products[index].qty -= 1;

      // //setState 
      // this.setState({
      //   products: products,
      // })
    }

    //handle on delete
    handleDeleteProduct = (id) => {
      // const { products } = this.state;
      // const items = products.filter((item) => {
      //   return item.id !== id;
      // });

      // this.setState({
      //   products: items,
      //   loading: false
      // })
      const docRef = this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(()=>{
          console.log('updated succesfuly')
        })
        .catch((error)=>{
          console.log('Error ', error);
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


    //to add data to firebase
    // addProduct = () => {
    //   this.db
    //     .collection('products')
    //     .add({
    //       img: '',
    //       qty: 1,
    //       price: 12999,
    //       title: 'Washing Machine'
    //     })
    //     .then((docRef)=>{
    //       console.log('product has been added' , docRef)
          
    //     })
    //     .catch((error)=>{
    //       console.log('Error ',error);
    //     })
    // }

  render(){
    const { products , loading} = this.state;

    return (
      <div className="App">
        <Navbar  count = {this.getCartCount()}/>
        {/* <button style={{padding: 20, fontSize:20}} onClick={this.addProduct}> Add Product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h3>Loading products...</h3>}
        <div style={{fontSize: 20 , padding: 10}}>Total: {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
