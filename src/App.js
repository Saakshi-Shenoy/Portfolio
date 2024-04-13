import './App.css';
// import Header from "./components/Header.jsx";
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div className='App'>
        <About />
        <Skills />
        <Projects />
        <Experience />
      </div>
  );
}

export default App;
