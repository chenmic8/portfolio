import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <div className="bg-base h-screen">

      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
