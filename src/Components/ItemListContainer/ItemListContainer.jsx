
import {Link, useParams} from "react-router-dom"
import { useState, useEffect} from "react";
import "../bulma.min.css"

import {db} from "../../Config/firebase"
import { collection, getDocs } from "firebase/firestore"


function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    const coleccionProductos = collection(db, "Productos") ;

    const getItemsProductos = async ()=>{
        const data = await getDocs(coleccionProductos);
        const datafiltered =  data.docs.map((doc)=> ({ ...doc.data(), id: doc.id}));
        return datafiltered;
    }

    const getProductsByCategory = async (id)=>{
        const data = await getDocs(coleccionProductos);
        const dataProductos =  data.docs.map((doc)=> ({ ...doc.data(), id: doc.id}))
        const datafiltered = dataProductos.filter((item)=>item.category === categoryId);
        return datafiltered
    }

    const funcionDeConsulta = categoryId ? getProductsByCategory : getItemsProductos;

    useEffect(()=>{
    
                    funcionDeConsulta(categoryId).then(
                    (MisProductos)=>{
                        
                        setProductos(MisProductos);
                    }
                )
    }, [categoryId])

    return  <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered mt-4 ">Mis Productos</h1>
                        <div className="columns  is-centered is-multiline">
                                { productos.length > 0 && productos.map( (item)=>{
                                    return ( 
                                        <div className="column is-one-fifth is-offset-1">
                                                <div className="card">
                                                    <div className="card-image ">
                                                        <figure className="image is-2by3">
                                                            <img src={item.image} alt="imagen" />    
                                                        </figure>
                                                                                                        
                                                    </div>
                                                    <div className="card-content">
                                                        <div key={item.id} className="content">
                                                            <p>{item.title}</p>
                                                            <p>${item.price}</p>
                                                        </div>
                                                    </div>
                                                    <footer className="card-footer">
                                                        <p className="card-footer-item">
                                                            <Link className="has-text-grey" to = {`/item/${item.id}`}> Ver </Link>
                                                        </p>
                                                    </footer>
                                                </div>
                                        </div>
                                            );
                                    }
                                )}
                        
                            
                        </div>
                    </div>
            </section>
}

export default ItemListContainer