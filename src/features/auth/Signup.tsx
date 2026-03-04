import { useFormik } from 'formik'
import { useRegisterMutation } from '../../services/auth';

function Signup() {
    const [registerFn]=useRegisterMutation()
    const userForm = useFormik({
        initialValues:{
            name: "",
            email: "",
            password: "",
            role: 'buyer'
        },
        onSubmit:(values)=>{
            registerFn(values).then(res=>{console.log(res);}).catch(err=>{console.log(err)})
        }
    })
  return (
    <div className='px-5'>
        <h1>Signup</h1>
        <form onSubmit={userForm.handleSubmit}>
            <input type="text" {...userForm.getFieldProps("name")} placeholder='Enter your name'/>
            <br />
            <input type="text" {...userForm.getFieldProps("email")} placeholder='Enter your email'/>
            <br />
            <input type="text" {...userForm.getFieldProps("password")} placeholder='Enter your password'/>
            <br />
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup