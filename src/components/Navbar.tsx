import { useDispatch, useSelector } from "react-redux"
import { Link,useNavigate } from "react-router-dom"
import { logout, updateUser } from "../features/auth/authSlice";
import { useEffect } from "react";
function Navbar() {
    const {userDetails} = useSelector(state=>state.auth)
    const {cartItems} = useSelector(state=>state.cart)
  console.log(cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(userDetails);
    useEffect(()=>{
      const userInfo = JSON.parse(window.localStorage.getItem("userInfo")!);
      if(userInfo?.token){
        dispatch(updateUser(userInfo))
      }
    },[])
    const handleLogout=()=>{
      dispatch(logout())
      navigate("/login")
    }
  return (
    <nav className="navbar bg-primary navbar-expand-lg navbar-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">MarketPlace</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {
            !userDetails.token && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vendorRegistration">Vendor Registration</Link>
                    </li>
                </>
            )
        }
        {
            userDetails.token && (
              <>
                {
                  userDetails.role === "vendor" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/vendorDashboard">Vendor Dashboard</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/createStore">Create Store</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/addProduct">Add Product</Link>
                      </li>
                    </>
                  )
                }
                {
                  userDetails.role === "buyer" && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">({cartItems?.length}) Cart</Link>
                      </li>
                    </>
                  )
                }
                <button className="btn btn-success" onClick={()=>{handleLogout()}}>{userDetails.name} Logout</button>
              </>
            )
        }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
