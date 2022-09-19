
import './App.css';
import Education from './components/Education';
import Homesection from './components/Homesection';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
function App() {
  return (
    <div>

      {/* <Homesection /> */}
      {/* <Education /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homesection />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/contact_us" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
