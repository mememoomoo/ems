import About from "../../ui/navButtons/navAboutButton/NavAboutButton";
import Home from "../../ui/navButtons/navHomeButton/NavHomeButton";
import "../menu.css";
import ArrowRight from "../../ui/navButtons/assets/ArrowRight";
import ArrowLeft from "../../ui/navButtons/assets/ArrowLeft";

const right = <ArrowRight />;
const left = <ArrowLeft />;

function ContactMenu() {
  return (
    <nav className="menu-wrapper">
      <div className="left-nav-wrapper">
        <div className="left-nav-container">
          <About arrow={left} />
        </div>
      </div>
      <div className="right-nav-wrapper">
        <div className="right-nav-container">
          <Home arrow={right} />
        </div>
      </div>
    </nav>
  );
}

export default ContactMenu;
