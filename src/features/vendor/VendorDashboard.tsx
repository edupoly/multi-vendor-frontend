import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetVendorProductsQuery } from '../../services/vendor'


const VendorDashboard: React.FC = () => {
  // Read authenticated user info from store
  const userDetails = useSelector((state: any) => state.auth.userDetails)
  console.log(userDetails);
  // Try to resolve vendor id from common locations
  const ud = userDetails as Record<string, unknown> | null;
  const vendorId = (ud && ((ud as any)._id || (ud as any).id || (ud as any).user?._id || (ud as any).user?.id)) || null

  const { isLoading, data } = useGetVendorProductsQuery(vendorId, { skip: !vendorId })

  // derive products list synchronously from RTK Query result
  const productsArray = Array.isArray(data) ? data : []

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Vendor Dashboard</h2>
        <div>
          <Link to="/createStore" className="btn btn-primary me-2">Create Store</Link>
          <Link to="/addProduct" className="btn btn-secondary">Add Product</Link>
        </div>
      </div>
      {/* summary cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              <p className="card-text display-6" style={{fontSize: '1.75rem'}}>{isLoading ? '...' : data?.length}</p>
              <small className="text-light">Total products for your vendor account</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default VendorDashboard
