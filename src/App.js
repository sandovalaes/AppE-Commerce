import  {BrowserRouter, Route, Routes} from "react-router-dom" 
import { CartProvider } from "./Context/CartContext";
import NavBar  from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import Checkout  from "./Components/Checkout/Checkout"; 

function App() {
  return (
          <BrowserRouter>
            <CartProvider>
              <NavBar/>
              <Routes>
                <Route path ="/" element = {<ItemListContainer/>}/>
                <Route path ="/category/:categoryId" element = {<ItemListContainer/>}/>
                <Route path ="/item/:id" element = {<ItemDetailContainer/>}/>
                <Route path ="/Cart" element = {<Cart/>}/>
                <Route path ="/Checkout" element = {<Checkout/>}/>
              </Routes>
            </CartProvider>  
          </BrowserRouter>
  );
}

export default App;
