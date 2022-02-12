import AboutMenu from "../../components/menus/aboutMenu/AboutMenu";
import "./assets/aboutPage.css";
import MicCrunch from "../../components/posters/micCrunch/micCrunch";
import AboutCopy from "./assets/aboutCopy";

let p = "About";
let b = <AboutCopy />;

function AboutPage() {
  return (
    <div className="home-page-wrapper">
      <div class="navigation-wrapper">
        <AboutMenu />
      </div>
      <div className="poster-wrapper">
        <MicCrunch pageName={p} bodyContent={b} />
      </div>
    </div>
  );
}

export default AboutPage;
