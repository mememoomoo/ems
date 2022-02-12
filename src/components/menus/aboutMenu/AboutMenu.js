import Home from "../../ui/navButtons/navHomeButton/NavHomeButton";
import Contact from "../../ui/navButtons/navContactButton/NavContactButton";
import "../menu.css";
import "./assets/aboutMenu.css";
import ArrowRight from "../../ui/navButtons/assets/ArrowRight";
import ArrowLeft from "../../ui/navButtons/assets/ArrowLeft";

const right = <ArrowRight />;
const left = <ArrowLeft />;

function AboutMenu() {
  return (
    <nav className="menu-wrapper">
      <div className="left-nav-wrapper">
        <div className="left-nav-container">
          <Home arrow={left} />
        </div>
      </div>
      <div className="right-nav-wrapper">
        <div className="right-nav-container">
          <Contact arrow={right} />
        </div>
      </div>
    </nav>
  );
}

export default AboutMenu;
