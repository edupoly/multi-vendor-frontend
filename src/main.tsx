import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from "./features/auth/Login.tsx";
import Register from "./features/auth/Register.tsx";

import { Provider } from 'react-redux';
import store from './app/store.ts'
import Home from "./components/Home.tsx";
import CreateStore from "./features/vendor/CreateStore.tsx";
import AddProduct from "./features/vendor/AddProduct.tsx";
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
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/createStore",
        element:<CreateStore></CreateStore>
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
      },
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
