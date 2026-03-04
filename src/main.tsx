import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from "./features/auth/Login.tsx";
import Signup from "./features/auth/Signup.tsx";
import VendorRegistration from "./features/auth/VendorRegister.tsx";

import { Provider } from 'react-redux';
import store from './app/store.ts'
import Home from "./components/Home.tsx";
import CreateStore from "./features/vendor/CreateStore.tsx";
import AddProduct from "./features/vendor/AddProduct.tsx";
import VendorProducts from "./features/vendor/VendorProducts.tsx";
import VendorDashboard from "./features/vendor/VendorDashboard.tsx";
import Cart from "./features/cart/Cart.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/", 
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path:"/vendorRegistration",
        element:<VendorRegistration></VendorRegistration>
      },
      {
        path:"/createStore",
        element:<CreateStore></CreateStore>
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"/vendorProducts/:id",
        element:<VendorProducts></VendorProducts>
      },
      {
        path:"/vendorDashboard",
        element:<VendorDashboard></VendorDashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
