import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Homepage from './homepage.jsx'
import RepairPage from './pages/repairPage.jsx'
import RepairPage2 from './pages/repairPage2.jsx'
import RepairPage3 from './pages/repairPage3.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ValuePage from './pages/valuePage.jsx'
import FAQ from './pages/faq.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage/>,
    errorElement: "404 NOT FOUND"
  },
  {
    path:"RepairPage",
    element:<RepairPage/>
  },
  {
    path:"RepairPage2",
    element:<RepairPage2/>
  },
  {
    path:"RepairPage3",
    element:<RepairPage3/>
  },
  {
    path:"ContactPage",
    element:<ContactPage/>
  },
  {
    path:"About",
    element:<ValuePage/>
  },
  {
    path:"FAQ",
    element:<FAQ/>
  }
],
{
  basename:"/MobileRepair/",
}
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

