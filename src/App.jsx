import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
//import Footer from "./components/Layout/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={""} />
        <Route path="/Howtobuy" element={""} />
        <Route path="/News" element={""} />
      </Routes>
    </>
  );
}

export default App;
