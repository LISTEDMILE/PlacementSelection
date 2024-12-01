import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Elements/Index1'
import {Footer} from './Elements/Index1'

function App() {
  return (
    <>
   <Header/>
   < div id="page">
   <Outlet/>
   </div>
   <Footer/>
   
    </>
  )
}
export default App