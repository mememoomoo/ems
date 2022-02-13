import Background from "./images/hypnotar-background.svg";
import Grunge from "./images/poster-grunge.svg";
import Overlay from "./images/guitar-face.svg";
import Cutout from "./images/guitar-cut-out.svg";
import Swirl from "./images/swirl-background.png";
import Burst from "./images/sunburst.svg";
import Logo from "../emsHypnotarLogo/EMSHypnotarLogo";
import "./ems-hypnotarbackground.css";

function EMSHypnotarBackground() {
  return (
    <div className="poster-background hypnotar-background">
      <div className="hypnotar-logo-container">
        <Logo />
      </div>
      <img className="hypnotar-burst" src={Burst} alt="" />
      <img className="hypnotar-grunge" src={Grunge} alt="" />
      <img className="hypnotar-overlay" src={Overlay} alt="" />
      <img className="hypnotar-cutout" src={Cutout} alt="" />
      <img className="hypnotar-swirl" src={Swirl} alt="" />
      <img className="hypnotar-poster-background" src={Background} alt="" />
    </div>
  );
}

export default EMSHypnotarBackground;
