import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Home, About, Projects, Contact } from './pages';
const App = () => {
    return (
        <main className='bg-slate-300/20 h-full'>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path='threejsportfolio/' element={<Home />} />
                        <Route path="threejsportfolio/about" element={<About />} />
                        <Route path="threejsportfolio/projects" element={<Projects />} />
                        <Route path="threejsportfolio/contact" element={<Contact />} />
                    </Routes>
                    <Footer/>
                </Router>
            </main>
    )
}

export default App