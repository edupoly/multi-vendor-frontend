import React from 'react'
import { useGetVendorProductsQuery } from '../../services/vendor'
import { useParams } from 'react-router-dom'

function VendorProducts() {
    const {id}=useParams()
  const {isLoading,data }= useGetVendorProductsQuery(id)
    return (
      <div>
          <h1>Vendor Products</h1>
          {isLoading && (<b>Loading....</b>)}
          {
              !isLoading && (
                  <div className='d-flex'>
                      {
                          data?.map((product)=>{
                              return(
                                  <div className="card m-3" style={{width: "18rem"}}>
                                      <div className="card-body">
                                          <h5 className="card-title">{product.name.toUpperCase()}</h5>
                                          <p className="card-text">{product.description}</p>
                                          <h4>Vendor:{product.vendor.name}</h4>
                                          <img src={product.image} className='w-100' alt="" />
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

export default VendorProducts