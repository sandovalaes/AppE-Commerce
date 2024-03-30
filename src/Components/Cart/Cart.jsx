import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {Link} from "react-router-dom"
import "./cart.css"
import "../bulma.min.css"

const Cart = ()=>{

    const {cart, importeTotal, quantityProducts ,removeItem, clearCart} = useContext(CartContext);

    if (quantityProducts===0){
        return  <div className="section">
                    <div className="container">
                        <h1 className="title has-text-centered mt-4 ">Mi Carrito</h1>
                        <h2 className="title has-text-centered mt-4 box has-background-warning-light">¡No hay items en el carrito!</h2>
                    </div>
                </div>
    }

    return  <div className="section">
                <div className="container">
                    <h1 className="title has-text-centered mt-4 ">Mi Carrito</h1>
                    {
                        cart.map((item) =>{ return (
                                        <div className="box is-flex is-justify-content-space-between is-align-content-center is-flex-wrap-wrap"> 
                                                <div>
                                                    <article className="media">
                                                        <div className="media-top">
                                                            <figure className="image is-32x32">
                                                                <img  src={item.image} alt="imagen" />    
                                                            </figure>
                                                        </div>
                                                    </article>
                                                </div>
            
                                                <div> {item.title}</div>
                                                <div> Precio: $ {item.price}</div>
                                                <div> Cantidad: {item.quantity}</div>
                                                <div> Importe: $ {item.price * item.quantity}</div>
                                                <div> <button className="button is-danger" onClick={()=>{removeItem(item.id)}}>X</button> </div>
                                        </div> 
                                    ) })
                    }
                    <div className="is-flex is-justify-content-center">
                        <strong> Total: $ {importeTotal}</strong>
                    </div>
                    <div className="buttons is-flex is-justify-content-center"> 
                        <button className="button is-success" onClick={()=>{clearCart()}}>Vaciar Carrito</button> 
                        <Link className="button is-info" to = {"/Checkout"}>
                            Finalizar Compra
                        </Link>
                    </div>
                </div>
            </div>
}

export default Cart