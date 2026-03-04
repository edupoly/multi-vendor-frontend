import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useGetCartItemsQuery } from "./services/vendor"
import { use, useEffect } from "react"
import { updateCart } from "./features/cart/cartSlice"

function App() {
const { userDetails } = useSelector(state => state.auth)
console.log(userDetails.id);
const { isLoading, data} = useGetCartItemsQuery(userDetails.id)
const dispatch = useDispatch()
useEffect(() => {
  // alert("use effect called"+isLoading)
  if (!isLoading) {
    console.log("use effect called", data.cart)
  }
}, [isLoading])

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
