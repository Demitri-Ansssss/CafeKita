import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MenuUtama from './Pages/MenuUtama.jsx';
import Home from './Pages/Home.jsx';
import MenuMakanan from './Pages/MenuMakanan.jsx';
import MenuMinuman from './Pages/MenuMinuman.jsx';
import Keranjang from './Pages/Keranjang.jsx';
import AboutUs from './Pages/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/MenuUtama",
    element: <MenuUtama/>
  },
  {
    path:"/Home",
    element: <Home/>
  },
  {
    path: "/MenuMakanan",
    element: <MenuMakanan/>
  },
  {
    path: "/MenuMinuman",
    element: <MenuMinuman/>
  },
  {
    path: "/Keranjang",
    element: <Keranjang/>
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>
  }
])



ReactDOM.createRoot(document.getElementById('root'))
  
.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
