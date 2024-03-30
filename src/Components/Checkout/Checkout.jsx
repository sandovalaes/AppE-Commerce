import "../bulma.min.css"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import validator from 'validator'
import { db } from "../../Config/firebase"
import "./checkout.css"


const Checkout = ()=>{

    const {cart, importeTotal, quantityProducts ,removeItem, clearCart} = useContext(CartContext);
    const [IdOrden, SetIdOrden] = useState("");
    const [Nombre, SetNombre] = useState("");
    const [Apellido, SetApellido] = useState("");
    const [Email1, SetEmail1] = useState("");
    const [Email2, SetEmail2] = useState("");
    const [EmailOk, SetEmailOk] = useState(false);

    const ConfirmarOrden = ()=>{
        const orden = {
            apellido: Apellido,
            cart: cart,
            email: Email1,
            nombre: Nombre,
            total: importeTotal
        }
    
    const ValidarEmail = (correo)=>{
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (correo.value.match(isValidEmail))
            SetEmailOk(true)
        else
            SetEmailOk(false)
    }

    const OrderRef = collection(db, "Ordenes");
        addDoc(OrderRef, orden).then(
            (doc)=>{
                SetIdOrden(doc.id);
                clearCart();
            }
        )
    }

    if (IdOrden)
    {
        return  <div className="section">
                    <div className="container">
                        <h1 className="title has-text-centered mt-4">¡Muchas gracias por tu compra!</h1>
                        <p className="has-text-centered mt-3"> Su nro de orden es: {IdOrden} </p>
                    </div>
                </div>
    }

    return  <div className="section">
                <div className="container">  
                    <h1 className="title has-text-centered mt-4">Checkout</h1> 
                    <div className="columns is-centered">
                        <div className="box column is-one-fifth">
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Ingrese nombre" onChange={(e)=>{SetNombre(e.target.value)}}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Apellido</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Ingrese apellido" onChange={(e)=>{SetApellido(e.target.value)}}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <p className="control has-icons-right">
                                        <input className="input" type="email" placeholder="Email" onChange={(e)=>{SetEmail1(e.target.value)}} required/>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                    <p class="help is-danger" style = {{display: Email1 === Email2 ? 'none':'block'}}>Los emails no son iguales</p>
                                    <p class="help is-danger" style = {{display: validator.isEmail(Email1)? 'none':'block'}}>El email no es válido</p>
                                </div>
                                <div className="field">
                                    <label className="label">Repetir Email</label>
                                    <p className="control has-icons-right">
                                        <input className="input" type="email" placeholder="Repetir Email" onChange={(e)=>{SetEmail2(e.target.value)}}/>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                    <p class="help is-danger" style = {{display: Email1 === Email2 ? 'none':'block'}}>Los emails no son iguales</p>
                                    <p class="help is-danger" style = {{display: validator.isEmail(Email2)? 'none':'block'}}>El email no es válido</p>
                                </div>
                                <div class="field centrar">
                                    <p class="control centrar">
                                        <button class="button is-info" onClick={ConfirmarOrden} disabled = {Nombre && Apellido && Email1 && Email2 && Email1 === Email2? false: true}>
                                            Confirmar Orden
                                        </button>
                                    </p>
                                </div>
                        </div>
                    </div>
                                
                </div>
            </div>
}

export default Checkout