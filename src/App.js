import './App.css';
// import Header from "./components/Header.jsx";
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  //   <Router>
  //   <div>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<About />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/projects" element={<Projects />} />
  //       <Route path="/experience" element={<Experience />} />
  //     </Routes>
  //   </div>
  // </Router>

   <div className='App'>
        <About />
        <Projects />
        <Experience />
      </div>
   

  );
}

export default App;
