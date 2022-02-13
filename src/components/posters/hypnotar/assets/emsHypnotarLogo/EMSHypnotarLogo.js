import Neck from "./assets/images/guitar-neck.svg";
import Spots from "./assets/images/spots.svg";
import "./assets/css/ems-hypnotar-logo.css";

const ribbonBackground = {
  backgroundImage: `url(${Spots})`,
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
};
function EMSHypnotarLogo() {
  return (
    <div className="hypnotar-logo">
      <div className="hypnotar-top-box hypnotar-text-box">
        <p>Event</p>
      </div>
      <div
        style={ribbonBackground}
        className="hypnotar-ribbon hypnotar-ribbon-top"
      ></div>
      <div className="hypnotar-middle-box hypnotar-text-box">
        <p>Medical</p>
      </div>
      <div
        style={ribbonBackground}
        className="hypnotar-ribbon hypnotar-ribbon-bottom"
      ></div>
      <div className="hypnotar-bottom-box hypnotar-text-box">
        <p>Staffing</p>
      </div>
      <img className="hypnotar-neck" src={Neck} alt="" />
    </div>
  );
}

export default EMSHypnotarLogo;
