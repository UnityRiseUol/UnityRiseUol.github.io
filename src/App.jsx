import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; // <--- We will create this next
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* The ":id" part is a variable (e.g., /projects/pulsar) */}
        <Route path="/projects/:id" element={<ProjectDetail />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;