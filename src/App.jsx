import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tiempo from './containers/Tiempo/Tiempo'
import Login from './containers/Login/Login'

import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tiempo" element={<Tiempo/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
