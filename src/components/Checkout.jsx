import { useCart } from "../context/cartContext";

export const TotalPrice = (cart) =>{
    let { totalAmount, setTotalAmount,count } = useCart();
    let myTotalAmount = cart?.reduce(
    (acc, items) => acc + items.price*count,
    0
  );
    setTotalAmount(myTotalAmount);
    return <div style={{ display: "inline" }}>{totalAmount}</div>;
};

export const Checkout = () => {
  let { cart,totalAmount} = useCart();
    return(
        <div
        className="card"
        style={{ width: "500px", marginleft: "1rem", padding: "1rem" }}
      >
        <h3>Price Details</h3>
        {cart.map(({ name, price ,category }) => {
          return (
              <div>
                <div>
                  Item:<strong>{name}</strong>
                </div>
                <div>
                    Category:<strong>{category}</strong>
                    </div>
                <div>
                  Price:<strong> ₹ {price * 1}</strong>
                </div>
              </div>

          );
        })}
        <div>
          <h3>Total Amount = ₹ { TotalPrice(cart)}</h3>
        </div>
        { totalAmount >0 && <button className = "btn btn-outline-primary" > Place Order</button>}

      </div>
    );
  };