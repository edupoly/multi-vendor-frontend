import React from 'react'
import { useGetStoresQuery } from '../../services/vendor'
import { Link } from 'react-router-dom';

function Stores() {
    const {isLoading,data }= useGetStoresQuery("edo okati");
  return (
    <div>
        <h1>Stores</h1>
        {isLoading && (<b>Loading....</b>)}
        {
            !isLoading && (
                <div className='d-flex'>
                    {
                        data.map((store)=>{
                            return(
                                <div className="card m-3" style={{width: "18rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{store.name.toUpperCase()}</h5>
                                        <p className="card-text">{store.description}</p>
                                        <h4>Vendor:{store.vendor.name}</h4>
                                        <Link to={`/vendorProducts/${store.vendor._id}`} className="btn btn-primary">Products</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            )
        }
    </div>
  )
}

export default Stores