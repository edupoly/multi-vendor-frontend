import React, { useEffect } from 'react'
import { useAddToCartMutation, useGetVendorProductsQuery } from '../../services/vendor'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
function VendorProducts() {
    const {id}=useParams()
  const {isLoading,data }= useGetVendorProductsQuery(id)
  const [addToCartFn] = useAddToCartMutation()
  const { cartItems } = useSelector(state => state.cart)
  const { userDetails } = useSelector(state => state.auth)
    console.log("vendorProducts:",userDetails);
  useEffect(() => {
    addToCartFn({ cartItems, token:userDetails.token,userId:userDetails.id }).then(res => { console.log(res); }).catch(err => { console.log(err) })
  }, [cartItems])


  const dispatch = useDispatch()
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
                                          <button onClick={() => {dispatch(addToCart({...product}))}}>Add to Cart</button>
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