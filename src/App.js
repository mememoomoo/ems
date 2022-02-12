import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Employee from "./routes/Employee";
import NotFound from "./routes/NotFound";
import BackgroundVideo from "./components/backgroundVideo/backgroundVideo";
import "./reset.css";
import "./index.css";
import "./components/ui/navButtons/assets/navButtons.css";
import "./components/posters/posters.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="employee" element={<Employee />} />
        </Routes>
        <BackgroundVideo />
      </BrowserRouter>
    </div>
  );
}

export default App;
