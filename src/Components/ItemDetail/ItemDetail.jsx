import { useState, useEffect, useContext}  from "react"
import { CartContext } from "../../Context/CartContext"
import "./itemdetail.css"
import "../bulma.min.css"

const ItemDetail = ({id, title, price ,description, category, image}) =>{

    const [CantAComprar, setCantAComprar] = useState(1);
    const [QuantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, image, price, title 
        }

        addItem(item, quantity)
    }
        return (
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-two-fifths">
                        <div >
                            <div >
                                <figure className="image is-fullwidth ">
                                    <img  src={image} alt="imagen" />    
                                </figure>
                            </div>
                        
                            <div className="descripcion">
                                <div>
                                    <h1 className="mt-4">{title}</h1>
                                </div>
                                <div>
                                    <p>{description}</p>
                                    <p>${price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="set-botones">
                            <button className="button  is-success" onClick={()=>setCantAComprar(CantAComprar === 1? 1 : CantAComprar-1)}>-</button>
                            <p>{CantAComprar}</p>
                            <button className="button is-success" onClick={()=>setCantAComprar(CantAComprar+1)}>+</button>
                            <button className="button is-danger" onClick={()=>handleOnAdd(CantAComprar)}>Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default ItemDetail