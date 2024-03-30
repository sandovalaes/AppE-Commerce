import {Link, useParams} from "react-router-dom"
import { useState, useEffect, useContext}  from "react"
//import {getProductById} from "../../AsyncMock"
import {db} from "../../Config/firebase"
import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import "../bulma.min.css"
import "./itemdetailcontainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer(){

    const {id} = useParams();
    const [encontrado, setEncontrado] = useState([]);

    const getProductById = async (id)=>{
        const docref = doc(db,"Productos",id);
        const dataDoc = await getDoc(docref);
        const propiedades = dataDoc.data();
        const producto = { ...propiedades, id: id}
        console.log(producto);
        return producto
    }

    useEffect(
        ()=>{
            getProductById(id).then(
                (producto)=>{
                    setEncontrado(producto);
                }
            )
        }
    ,[])
    
    return  <div className="section">
                <ItemDetail id = {encontrado.id} title = {encontrado.title} price = {encontrado.price} description = {encontrado.description}  category = {encontrado.category} image = {encontrado.image}/>
                <div>
                    <div>
                        <Link className="button is-info" to="/">Volver</Link>
                    </div>
                </div>
            </div> 
            
}

export default ItemDetailContainer