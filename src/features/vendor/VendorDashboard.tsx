
import { useSelector } from 'react-redux'
import { useGetVendorProductsQuery } from '../../services/vendor';
import { Link } from 'react-router-dom';

function VendorDashboard() {
    const {userDetails} = useSelector(state=>state.auth)
    console.log("userDetails::",userDetails.id);
    const {isLoading, data } = useGetVendorProductsQuery(userDetails.id)
  return (
    <div>
        VendorDashboard
        {isLoading && (<b>Loading....</b>)}
        {
            !isLoading && (
                <div className="row">
                    <div className="col-sm-6 mb-2 mb-sm-0">
                        <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Products</h3>
                            <h4 className="card-text">{data?.length} products found</h4>

                            <Link to={`/vendorProducts/${userDetails.id}`} className="btn btn-primary">Show All Products</Link>
                        </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default VendorDashboard