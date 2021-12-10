import { useData } from "../context/productData";
export const Filter = () => {
    const {dispatch,vegetables,fruits}=useData();
    return (
        <fieldset>
            <legend>Shop by Category</legend>
            <label>
                <input type = "checkbox" name="vegetables" checked = {vegetables} onChange={()=>dispatch({type:"TOGGLE_INVENTORY" })}/>
                Vegetables
            </label>
            <label>
                <input type ="checkbox" name ="fruits" checked = {fruits} onChange={()=>dispatch({type:"TOGGLE_DELIVERY"})}/>
                Fruits
            </label>
        </fieldset>
    )
}