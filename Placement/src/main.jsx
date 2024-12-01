
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { StrictMode } from 'react'
import { About, Home, Contact, Login, SignUp, Dataa, Requestt, Company} from './Elements/Index1.js'
import App from './App.jsx'

const router1 = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='company' element={<Company/>}/>
          <Route path='requestt' element={<Requestt/>}/>
          <Route path='dataa' element={<Dataa/>}/>
        
        
      
      </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router1}/>

  </StrictMode>

)
