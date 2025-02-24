import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx"
import Footer from "./components/Footer.jsx";
import Loginpop from "./components/Loginpop.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
      {showLogin?<Loginpop setShowLogin={setShowLogin}></Loginpop>:<></>}
      <div className='app'>
        <ToastContainer/>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />


    </>
  )
};

export default App;
