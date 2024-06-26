import './App.css'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Blog} from './pages/Blog'
import { Blogs } from './pages/Blogs' 
import { Publish } from './pages/Publish' 
import { useEffect } from 'react'


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


export default App


function AppContent() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signup');
    } else {
      navigate('/blogs');
    }
  }, []);

  return (
    <>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>

    </>
     
  )
}
