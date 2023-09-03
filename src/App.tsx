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
      <footer className="text-subtext0 flex flex-row w-full justify-around bg-crust py-4 absolute bottom-0">
        <a href="https://www.linkedin.com/in/michelle-chen-349911270/">linkedin</a>
        <a href="https://github.com/chenmic8">github</a>
      </footer>
    </div>
    </>
  );
}

export default App;
