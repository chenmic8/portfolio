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
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">
      Install & Setup Vite + React + Typescript + Tailwind CSS 3
      </h1>
    </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
