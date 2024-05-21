import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Convert from './components/Convert'
import Download from './components/Download'
import RemoveBg from './components/RemoveBg'
import AppPage from './components/AppPage'
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <div>      
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/convert" element={<Convert/>}/>
        <Route path="/download" element={<Download/>}/>
        <Route path="/removebg" element={<RemoveBg/>}/>
        <Route path="/AppPage" element={<AppPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App