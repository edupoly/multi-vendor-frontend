import React from 'react'
import { useLoginMutation } from '../../services/auth';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateUser } from './authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [loginFn]=useLoginMutation()
      const loginForm = useFormik({
          initialValues:{
              email: "",
              password: "",
          },
          onSubmit:(values)=>{
              loginFn(values).then(res=>{
                console.log(res);
                dispatch(updateUser(res.data))
                // If logged in user is a vendor, navigate to vendor dashboard
                const role = res.data?.role || res.data?.user?.role
                if(role === 'vendor'){
                  navigate('/vendor-dashboard')
                } else {
                  navigate('/')
                }
              }).catch(err=>{console.log(err)})
          }
      })
    return (
      <div className='px-5'>
          <h1>Login</h1>
          <form onSubmit={loginForm.handleSubmit}>
              <input type="text" {...loginForm.getFieldProps("email")} placeholder='Enter your email'/>
              <br />
              <input type="text" {...loginForm.getFieldProps("password")} placeholder='Enter your password'/>
              <br />
              <button>Login</button>
          </form>
      </div>
    )
}

export default Login