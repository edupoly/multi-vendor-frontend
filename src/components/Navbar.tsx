import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../features/auth/authSlice";
function Navbar() {
    const {userDetails} = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    console.log(userDetails);
  return (
    <nav className="navbar bg-primary navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MarketPlace</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
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
                </>
            )
        }
        {
            userDetails.token && (
                <button className="btn btn-success" onClick={()=>{dispatch(logout())}}>Logout</button>
            )
        }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar