import About from "../../ui/navButtons/navAboutButton/NavAboutButton";
import Contact from "../../ui/navButtons/navContactButton/NavContactButton";
import "../menu.css";
import "./assets/homeMenu.css";
import ArrowRight from "../../ui/navButtons/assets/ArrowRight";
import ArrowLeft from "../../ui/navButtons/assets/ArrowLeft";

const right = <ArrowRight />;
const left = <ArrowLeft />;

function HomeMenu() {
  return (
    <nav className="menu-wrapper">
      <div className="left-nav-wrapper">
        <div className="left-nav-container">
          <Contact arrow={left} />
        </div>
      </div>
      <div className="right-nav-wrapper">
        <div className="right-nav-container">
          <About arrow={right} />
        </div>
      </div>
    </nav>
  );
}

export default HomeMenu;
