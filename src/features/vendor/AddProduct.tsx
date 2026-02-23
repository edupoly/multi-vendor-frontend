import { useFormik } from 'formik';
import { useAddProductMutation, useAddStoreMutation } from '../../services/vendor';
import { useSelector } from 'react-redux';

function AddProduct() {

    const {userDetails} = useSelector(state=>state.auth)
    const [addProductFn] = useAddProductMutation();
      const productForm = useFormik({
          initialValues:{
             name:"", 
             description:"", 
             price:"", 
             stock:"", 
             image:""
          },
          onSubmit:(values)=>{
            // console.log(values);
            addProductFn({product:values,token:userDetails.token}).then((res)=>{console.log(res);}).catch((err)=>{console.log("err",err);})
          }
      })
    return (
      <div className='px-5'>
          <h1>Add Product</h1>
          <form onSubmit={productForm.handleSubmit}>
              <input type="text" {...productForm.getFieldProps("name")} placeholder='Enter Product Name'/>
              <br />
              <input type="text" {...productForm.getFieldProps("description")} placeholder='Enter Description'/>
              <br />
              <input type="text" {...productForm.getFieldProps("price")} placeholder='Enter Price'/>
              <br />
              <input type="text" {...productForm.getFieldProps("stock")} placeholder='Enter Stock'/>
              <br />
              <input type="text" {...productForm.getFieldProps("image")} placeholder='Enter Image URL'/>
              <br />
              <button>Add Product</button>
          </form>
      </div>
    )
}

export default AddProduct