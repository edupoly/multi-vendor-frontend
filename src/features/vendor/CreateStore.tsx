import { useFormik } from 'formik';
import { useAddStoreMutation } from '../../services/vendor';
import { useSelector } from 'react-redux';

function CreateStore() {
        const [addStoreFn] = useAddStoreMutation();
    const {userDetails} = useSelector(state=>state.auth)

      const storeForm = useFormik({
          initialValues:{
              name: "",
              description: ""
          },
          onSubmit:(values)=>{
            addStoreFn({store:values,token:userDetails.token}).then((res)=>{console.log(res);}).catch((err)=>{console.log("err",err);})
          }
      })
    return (
      <div className='px-5'>
          <h1>Create Store</h1>
          <form onSubmit={storeForm.handleSubmit}>
              <input type="text" {...storeForm.getFieldProps("name")} placeholder='Enter Store Name'/>
              <br />
              <input type="text" {...storeForm.getFieldProps("description")} placeholder='Enter Description'/>
              <br />
              <button>Add Store</button>
          </form>
      </div>
    )
}

export default CreateStore