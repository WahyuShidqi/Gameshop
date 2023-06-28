import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Howtobuy from "./components/howtobuy";
import About from "./components/about";
import News from "./components/news";
//import Footer from "./components/Layout/footer/footer";
import Subscribe from "./components/homecomponent/subscribe";
import Footer from "./components/homecomponent/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Howtobuy" element={<Howtobuy />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
