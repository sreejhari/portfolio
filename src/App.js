import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutMePage } from "./pages/AboutMePage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { NavBar } from "./pages/NavBar";
import { HomePage } from "./pages/homePage";
import ContactForm from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KWV6_K_ZHUK66gpPa87rP8vibsQqf2ijNg&usqp=CAU"
              alt=""
              width="300"
            ></img>
          </div>
          <NavBar />
          
          <button
            style={{
              fontSize: "20px",
              color: "purple",
              borderRadius: "12px",
              marginRight: "20px",
            }}
          >
            <Link to="/Contact">Contact</Link>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/AboutMe" element={<AboutMePage />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
