// import logo from './logo.svg';
import { Carousel } from "react-bootstrap";
import "./App.css";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Carousel />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
