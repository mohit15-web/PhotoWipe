import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Convert from './components/Convert'
import Download from './components/Download'
import Footer from './components/Footer'
function App() {
  return (
    <div>      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/convert" element={<Convert/>}/>
        <Route path="/download" element={<Download/>}/>
      </Routes>
      
    </div>
  )
}

export default App