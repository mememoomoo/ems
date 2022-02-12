import HomeMenu from "../../components/menus/homeMenu/HomeMenu";
import "./assets/homePage.css";
import MicCrunch from "../../components/posters/micCrunch/micCrunch";
import AboutCopy from "../aboutPage/assets/aboutCopy";

let p = "Home";
let b = <AboutCopy />;

function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div class="navigation-wrapper">
        <HomeMenu />
      </div>
      <div className="poster-wrapper">
        <MicCrunch pageName={p} bodyContent={b} />
      </div>
    </div>
  );
}

export default HomePage;
