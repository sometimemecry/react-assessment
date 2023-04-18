import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Admin from './admin'
import User from './user'
import Owner from './owner'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Admin',
    element: <Admin />
  },
  {
    path: '/User',
    element: <User />
  },
  {
    path: '/Owner',
    element: <Owner />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

