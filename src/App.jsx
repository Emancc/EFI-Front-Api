import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Users from './components/Users'
import Blogs from './components/Blogs'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container p-4">
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path="/" element={<Users />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
