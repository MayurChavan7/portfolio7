
import './App.css';
//import {useState,useEffect} from 'React'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {

  return (

  <div className="App">
       <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/Projects" element={<Projects/>} />
         <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience/>} /> 
      </Routes>
      <Footer/>
    </Router> 
  </div>
  
  
  );
}

export default App;
