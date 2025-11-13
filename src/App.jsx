import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Users from './components/Users'
import Blogs from './components/Blogs'
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import BlogsCreate from './components/BlogsCreate'
import BlogDetail from './components/BlogDetail'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <BrowserRouter>
          <Navbar />
          <main className="flex-grow-1 pt-5 m-3">
            <div className="container pt-4">
              <ToastContainer position="top-right" autoClose={3000} />
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path='/about' element={<About />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/users" element={<Users />} />
                <Route path="/blogs/create" element={<BlogsCreate />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
