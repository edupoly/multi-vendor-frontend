import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout, updateUser } from "../features/auth/authSlice";
import { useEffect } from "react";
function Navbar() {
    const {userDetails} = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    console.log(userDetails);
    useEffect(()=>{
      const userInfo = JSON.parse(window.localStorage.getItem("userInfo")!);
      if(userInfo?.token){
        dispatch(updateUser(userInfo))
      }
    },[])

    // determine if logged in user is a vendor
    const isVendor = userDetails?.role === 'vendor' || userDetails?.user?.role === 'vendor'
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
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/buyerRegister">Buyer Registration</Link>
                    </li>
                </>
            )
        }
        {
            userDetails.token && (
              <>
                {isVendor && (
                  <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/vendor-dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link active" to="/createStore">Create Store</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/addProduct">Add Product</Link>
                </li>
                  </>
                )}
                
                <button className="btn btn-success" onClick={()=>{dispatch(logout())}}>{userDetails.name} Logout</button>
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
