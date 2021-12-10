import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router";
import { Filter } from "./Filter";
import allProducts from "../productDB"
export const Home = () =>{
    const navigate = useNavigate();
    const {setCart} =useCart();
    return (
      <div className="card-row">
            {allProducts.map((item)=>(
                <div className ="card">
                    <img src = {item.image} alt ="images" style={{width:"230px"}}/>
                        <h1>{item.name}</h1>
                            <p>Qty {item.available}</p>
                                {item.available > 0 ? <p>Availabe </p> : <p> out of stock  </p> }
                            <h1>{item.vendor}</h1>
                            <h1>{item.category}</h1>
                            <p className="price">
                                <strong>Rs. {item.price}</strong>
                            </p>
                        <div>
                            {item.available ? 
                                <button className="bt bt-primary" onClick={() => {navigate("/cart");
                                setCart((items)=>[...items,item])}}>Add to Cart</button>
                                : " "}
                        </div>
                </div>
            ))}
                <div>
                    <Filter />
                </div>
        </div>
    )
}