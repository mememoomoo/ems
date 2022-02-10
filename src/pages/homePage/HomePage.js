import HomeMenu from "../../components/menus/homeMenu/HomeMenu";
import "./assets/homePage.css";
import MicCrunch from "../../components/posters/micCrunch/micCrunch";
import BaconIpsum from "../../components/baconIpsum/baconIpsum";

function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div class="navigation-wrapper">
        <HomeMenu />
      </div>
      <div className="poster-wrapper">
        <MicCrunch
          logoText="Event Medical Staffing"
          pageName="About"
          bodyContent={<BaconIpsum />}
        />
      </div>
    </div>
  );
}

export default HomePage;
