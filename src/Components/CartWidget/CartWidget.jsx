import React from 'react'
import './cartwidget.css'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react';
import { CartContext } from "../../Context/CartContext"
import "../bulma.min.css"


const CartWidget = () => {
    const [count, setCount] = useState(0);
    const {quantityProducts} = useContext(CartContext)

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='contenedor-cart'>
                <Link className ='style-link' to = {"/Cart"}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#3e8ed0", fontSize: "30px" }} />
                    <p className="contador">
                        {quantityProducts} 
                    </p>
                </Link>
        </div>
    )
}

export default CartWidget