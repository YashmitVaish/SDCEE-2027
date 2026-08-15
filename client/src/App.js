import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Two from "./Components/Two/Two";
import Three from "./Components/Three/Three";
import Footer from "./Components/Footer/Footer";
import Five from "./Components/Five/Five";
import Six from "./Components/Six/Six";
import Committee from "./Components/Committee/Committee";
import Registration from "./pages/registration";
import Abstract from "./pages/Abstract";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Speakers from "./Components/Speakers/Speakers";
import SponsorshipComponent from "./Components/SponsorshipComponent/SponsorshipComponent";
import InfoBar from "./Components/InfoBar/InfoBar";
import Venue from "./Components/Venue/Venue";



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
      <InfoBar />
      <Two />
      <Three />
      {/* <SponsorshipComponent />
      <Speakers /> */}
      <Venue />
      <Committee />
      <Five />
      <Six />
    </>
  );
}

export default App;
