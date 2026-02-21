import { useFormik } from 'formik'
import React from 'react'
import { useRegisterMutation } from '../../services/auth';

function Register() {
    const [registerFn]=useRegisterMutation()
    const userForm = useFormik({
        initialValues:{
            name: "",
            email: "",
            password: "",
            role: 'vendor'
        },
        onSubmit:(values)=>{
            registerFn(values).then(res=>{console.log(res);}).catch(err=>{console.log(err)})
        }
    })
  return (
    <div className='px-5'>
        <h1>Register</h1>
        <form onSubmit={userForm.handleSubmit}>
            <input type="text" {...userForm.getFieldProps("name")} placeholder='Enter your name'/>
            <br />
            <input type="text" {...userForm.getFieldProps("email")} placeholder='Enter your email'/>
            <br />
            <input type="text" {...userForm.getFieldProps("password")} placeholder='Enter your password'/>
            <br />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register