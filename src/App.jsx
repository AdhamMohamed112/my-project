import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import './App.css'
import Nav from './comonents/navbar/Nav'
import Home from './comonents/Home/Home'
import About from './comonents/about/About'
import Gellary from './comonents/gellary/Gellary'
import Contact from './comonents/contact/Contact'
import Service from './comonents/service/Service'
import Footer from './comonents/footer/Footer'

function App() {
  window.onscroll = function(){
    if(window.scrollY > 230){
      document.querySelector(".up").style = 'display:block;'
    }else{
      document.querySelector(".up").style = 'display:none;'
    }
  }
  function up() {
    window.scrollTo(0,0);
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/gellary' element={<Gellary />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
        <button onClick={up} className='up'><FaArrowUp /></button>
    </BrowserRouter>
    </>
  )
}

export default App
