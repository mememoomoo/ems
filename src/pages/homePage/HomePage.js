import HomeMenu from "../../components/menus/homeMenu/HomeMenu";
import "./assets/homePage.css";
import PosterBackground from "./assets/home-poster-background.png";

const posterBackground = {
  backgroundImage: `url(${PosterBackground})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function HomePage() {
  return (
    <div className="home-page-wrapper">
      <div class="navigation-wrapper">
        <HomeMenu />
      </div>
      <div className="poster-wrapper">
        <div style={posterBackground} className="poster-container">
          <div className="poster-content">
            <p>This the poster</p>
            <p>This is a space</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
