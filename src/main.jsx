import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import './Responsive.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import AccLayout from './AccLayout.jsx'
import Home from './production/Home.jsx'
import Service from './production/Service.jsx'
import Product from './production/Product.jsx'
import About from './production/About.jsx'
import Login from './production/Account/Login.jsx'
import CreateAccount from './production/Account/CreateAccount.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "Service",
        element: <Service />
      },
      {
        path: "Product",
        element: <Product />
      },
      {
        path: "About",
        element: <About />
      }
      
    ]
  },{
  path: '/',
  element: <AccLayout/>,
  children: [
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "account",
        element: <CreateAccount/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
