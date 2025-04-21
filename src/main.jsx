import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//from react router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';
import GoogleAthor from './Components/GoogleAthor/GoogleAthor.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    errorElement: <Error></Error>,
    children : [
      {
        path : "/google",
        element : <GoogleAthor></GoogleAthor>,

      },
    ]

  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
