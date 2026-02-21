import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetails:{
    name:"",
    email:"",
    role:"",
    token:""
  }
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateUser: (state,action) => {
      state.userDetails = {...action.payload.data}
    },
    logout:(state)=>{
        state.userDetails={...initialState.userDetails}
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser,logout } = authSlice.actions

export default authSlice.reducer