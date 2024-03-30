import { createContext, useState } from "react";    

export const CartContext = createContext(
    {cart:[]}
)

export const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([])
    const [quantityProducts, setQuantityProducts] = useState(0)
    const [importeTotal, setImporteTotal] = useState(0)

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}]);
            setQuantityProducts(quantityProducts + quantity);
            setImporteTotal(importeTotal + item.price*quantity);
        }else{
            const findProduct = cart.find(prod => prod.id === item.id)
            findProduct.quantity =  findProduct.quantity + quantity;
            setQuantityProducts(quantityProducts + quantity);
            setImporteTotal(importeTotal + item.price*quantity);
            console.error("El producto repetido  fue ingresado")
            console.log(cart)
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        let importUpdated = 0;
        let cantUpdated = 0;
        cartUpdated.forEach((item)=>{importUpdated += item.price * item.quantity; cantUpdated += item.quantity} )
        setCart(cartUpdated)
        setImporteTotal(importUpdated)
        setQuantityProducts(cantUpdated)
    }

    const clearCart =() => {
        setCart([]);
        setImporteTotal(0)
        setQuantityProducts(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clearCart, quantityProducts, importeTotal}}>
            {children}
        </CartContext.Provider>
    )

}