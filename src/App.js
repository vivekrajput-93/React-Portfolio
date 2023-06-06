
import './App.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects/>} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
