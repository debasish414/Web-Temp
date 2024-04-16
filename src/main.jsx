import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import './Responsive.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './production/Home.jsx'
import Service from './production/Service.jsx'
import Product from './production/Product.jsx'
import About from './production/About.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Service/>
      },
      {
        path: "Service",
        element: <Home/>
      },
      {
        path: "Product",
        element: <Product/>
      },
      {
        path: "About",
        element: <About/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
