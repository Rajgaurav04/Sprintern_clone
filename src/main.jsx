import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './components/LandingPage'
import Courses from './components/Courses'
import Layout from './components/Layout'
import {Route} from 'react-router-dom'
import About from './components/About'
import Admin from './components/Admin'
import './index.css'
import App from './App.jsx'

import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<LandingPage/>}/>
      <Route path="courses" element={<Courses/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="admin" element={<Admin/>}/>
    </Route>
    
      
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
