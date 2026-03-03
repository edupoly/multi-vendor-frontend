
import { useGetVendorProductsQuery } from '../../services/vendor'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../buyer/cartSlice'
import { useUpdateToCartMutation } from '../../services/order'
import { useEffect } from 'react'


function VendorProducts() {
    const {id}=useParams()
        const {cartItems} = useSelector(state=>state.cart)

  const {isLoading,data }= useGetVendorProductsQuery(id)

  const [updateToCartFn] = useUpdateToCartMutation()
   const handleAddToCart = (product:any) => {
        dispatch(addToCart(product))
  }
  useEffect(()=>{
    console.log("inside useEffect",cartItems);
    updateToCartFn({cartItems}).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }, [cartItems])
  const dispatch = useDispatch();
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
                                          <button onClick={()=>{handleAddToCart(product)}} className='btn btn-primary'>Add To Cart</button>
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