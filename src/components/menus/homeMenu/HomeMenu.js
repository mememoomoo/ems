import About from "../../ui/navButtons/navAboutButton/NavAboutButton";
import Contact from "../../ui/navButtons/navContactButton/NavContactButton";
import "./assets/homeMenu.css";

function HomeMenu() {
  return (
    <nav className="home-menu-wrapper">
      <div className="about-nav-wrapper">
        <div className="contact-nav-container">
          <About />
        </div>
      </div>
      <div className="contact-nav-wrapper">
        <div className="contact-nav-container">
          <Contact />
        </div>
      </div>
    </nav>
  );
}

export default HomeMenu;
