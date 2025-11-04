import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Users from './components/Users'
import Blogs from './components/Blogs'
import Login from './components/Login'
import Register from './components/Register'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="container p-4">
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
