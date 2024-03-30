import MisProductos from "./data"


import {db} from "./Config/firebase"
import { collection,getDocs } from "firebase/firestore"

const coleccionProductos = collection(db, "Productos") ;



export const getProducts = ()=>{
    return new Promise(
        (resolve)=> {
                    setTimeout( ()=>{resolve(MisProductos)},500)
                    }
    )
}

export const getProductsByCategory = (categoryId)=>{
    return new Promise(
        (resolve)=> {
                    setTimeout(()=>{resolve(MisProductos.filter((producto)=>producto.category === categoryId))},500)
                    }
    )
}

