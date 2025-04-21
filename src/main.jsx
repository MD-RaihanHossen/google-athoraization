import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Athorrigation from './Components/Athorrigation/Athorrigation.jsx';

//from react router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Athorrigation></Athorrigation>
      }
    ]

  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
