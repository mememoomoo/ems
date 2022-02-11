import HomeMenu from "../../components/menus/homeMenu/HomeMenu";
import "./assets/homePage.css";
import MicCrunch from "../../components/posters/micCrunch/micCrunch";
import BaconIpsum from "../../components/baconIpsum/baconIpsum";

let l = "Event Medical Staffing";
let p = "About";
let b = <BaconIpsum />;

function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div class="navigation-wrapper">
        <HomeMenu />
      </div>
      <div className="poster-wrapper">
        <MicCrunch logoText={l} pageName={p} bodyContent={b} />
      </div>
    </div>
  );
}

export default HomePage;
