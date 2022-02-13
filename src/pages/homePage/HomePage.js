import HomeMenu from "../../components/menus/homeMenu/HomeMenu";
import "./assets/homePage.css";
import Hypnotar from "../../components/posters/hypnotar/Hypnotar";

function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div class="navigation-wrapper">
        <HomeMenu />
      </div>
      <div className="poster-wrapper">
        <Hypnotar />
      </div>
    </div>
  );
}

export default HomePage;
