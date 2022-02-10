import Home from "../../ui/navButtons/navHomeButton/NavHomeButton";
import Contact from "../../ui/navButtons/navContactButton/NavContactButton";
import "./assets/aboutMenu.css";

function AboutMenu() {
  <nav className="about-menu-wrapper">
    <div className="contact-nav-wrapper">
      <div className="contact-nav-container">
        <Contact />
      </div>
    </div>
    <div className="home-nav-wrapper">
      <div className="home-nav-container">
        <Home />
      </div>
    </div>
  </nav>;
}

export default AboutMenu;
