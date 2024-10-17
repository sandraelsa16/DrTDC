import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Admin from './Pages/Admin'
import User from './Pages/User'
import Contactinfo from './Components/Contactinfo'
import Contact from './Pages/Contact'

Home

function App() {
  return (
    <>
      <Contactinfo/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
