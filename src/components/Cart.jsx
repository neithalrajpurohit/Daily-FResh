import { useCart } from "../context/cartContext"
import {Checkout} from "../components/Checkout";

export const Cart = () => {
    const {cart,setCart,count,setCount} = useCart();

    function deleteHandler (items){
        setCart((prevValue)=>prevValue.filter((product) => product !== items));
    }
    return(
        <div className="card-row">

            {cart.map((items)=>(
                <div className ="card">
                    <img src = {items.image} alt ="images" style={{width:"230px"}}/>
                        <h1>{items.name}</h1>
                         <p>Qty {items.available}</p>
                        <h1>{items.vendor}</h1>
                        <h1>{items.category}</h1>
                          <p className="price">
                                <strong>Rs. {items.price}</strong>
                          </p>
                                <button onClick={()=>setCount((count)=>count+1)}>
                                     +
                                </button>
                                    {count}
                                <button   onClick={()=>setCount((count)=>count-1)}>
                                     -
                                </button>
                                <button className="bt bt-primary" onClick={()=> deleteHandler(items)}>Discard</button>
                    </div>
            ))}
            <div>
               <Checkout />
            </div>
        </div>
    )
}