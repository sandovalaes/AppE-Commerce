import {Link} from "react-router-dom"
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget"


import "../bulma.min.css"
import "./navbar.css"


function NavBar(){

    const [isActive, setisActive] = useState(false);

    return <div >
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation"> 
            <div className="navbar-brand">
                <Link className="navbar-item" to="/"> 
                    <p className="title">MiTienda</p>
                </Link>
                <Link  
                    onClick={() => {
                        setisActive(!isActive);
                    }}  
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div> 
            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-start ">
                    <Link className="navbar-item" to = "/">Inicio</Link>
                    <Link className="navbar-item" to = "/category/Pantalones">Pantalones</Link>
                    <Link className="navbar-item" to = "/category/Remeras">Remeras</Link>
                    <Link className="navbar-item" to = "/category/Camperas">Camperas</Link>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <CartWidget/>
                    <div className="buttons">
                        <Link className="button is-info">
                            <strong>Sign up</strong>
                        </Link>
                        <Link className="button is-light">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </div>
}

export default NavBar 
