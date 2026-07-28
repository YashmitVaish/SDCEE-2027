import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Two from "./Components/Two/Two";
import Three from "./Components/Three/Three";
import Four from "./Components/Four/Four";
import Footer from "./Components/Footer/Footer";
import Five from "./Components/Five/Five";
import Six from "./Components/Six/Six";
import Committee from "./Components/Committee/Committee";
import Registration from "./pages/registration";
import Abstract from "./pages/Abstract";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Speakers from "./Components/Speakers/Speakers";
import SponsorshipComponent from "./Components/SponsorshipComponent/SponsorshipComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/abstract" element={<Abstract />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Two />
      <Three />
      <SponsorshipComponent />
      <Speakers />
      <Four />
      <Committee />
      <Five />
      <Six />
    </>
  );
}

export default App;
