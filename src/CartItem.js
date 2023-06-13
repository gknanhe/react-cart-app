import React from "react";



class CartItem extends React.Component {
    constructor(){
        super(); // to call the constructor of inherited class (React. Componant)
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: '',
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)   //can also work but messi
       
    }

    //Arrow functions asig this (.bind(this)) 
    increaseQuantity= () => {
        console.log('this.state',this.state);
        //setState form -1
        // this.setState({
        //     qty: this.state.qty + 1
        // })

        //setState form -2 -> use this if prev value required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1 ,
            }
        })

    }

    //Decrese QtY
    decreaseQuantity = ()=> {
        console.log("this.state", this.state);
        this.setState((prevState) => {
            if(prevState.qty === 0 ){
                return ;
            }
            return {
                qty: prevState.qty - 1 ,
            }
        })
    }
    
    render (){
        const { price,title, qty } = this.state;   //object destucturing
        return(
            <div className="cart-item">
                <div className="left-block"> 
                    <img style={styles.image} 
                    alt="img" />
 
                </div>
   
               <div className="right-block"> 
                    <div style={{fontSize: 25}}>{title}</div>   {/* can also be used {this.state.title} */}
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}

                        <img 
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                            onClick={this.increaseQuantity}   
                            />   {/* Can also write like this -> this.increaseQuantity.bind(this) */}
                        <img 
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                            onClick={this.decreaseQuantity}   
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/3385/3385559.png"/>
                    </div>
                </div> 
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius : 4,
        background: '#ccc'
    }
}

export default CartItem;