
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { clearCart } from './cartSlice'
import { usePlaceOrderMutation, useUpdateToCartMutation } from '../../services/order'
import { useEffect } from 'react'
function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)
  const [placeOrderFn] = usePlaceOrderMutation()
  const [updateToCartFn] = useUpdateToCartMutation()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  useEffect(()=>{
      console.log("inside useEffect",cartItems);
      updateToCartFn({cartItems}).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }, [cartItems])

  const handlePlaceOrder = () => {
    placeOrderFn(null)
      .then((res) => {
        console.log("Order placed", res)
        dispatch(clearCart())
      }).catch((err) => {
        console.log("Error placing order", err)
      })
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={handlePlaceOrder}>Place order</button>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart