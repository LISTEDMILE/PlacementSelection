import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Elements/Index1'
import {Footer} from './Elements/Index1'
import { UserContextProvider } from './StuContextPro'

function App() {
  return (
    <>
    <UserContextProvider>
   <Header/>
   < div id="page">
   <Outlet/>
   </div>
   <Footer/>
   </UserContextProvider>
    </>
  )
}
export default App