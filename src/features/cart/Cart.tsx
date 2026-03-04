import { useEffect } from "react"
import { useSelector } from "react-redux"
function Cart() {
  const { cartItems } = useSelector(state => state.cart)
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])
  return (
    <div>
      <h1>Cart</h1>
      {
        cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {
              cartItems.map(item => (
                <li key={item.id}>{item.name} - {item.quantity}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default Cart