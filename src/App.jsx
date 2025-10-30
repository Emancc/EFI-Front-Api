import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Users from './components/Users'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="container p-4">
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path="/" element={<Users />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
