import { Link } from "react-router-dom";
import "./assets/navContactButton.css";
import Arrow from "../assets/arrow.svg";

function NavContactButton() {
  return (
    <div className="link-container">
      <Link to="/contact">
        <div className="arrow-left">
          <img src={Arrow} alt="" />
        </div>
        <p>Contact</p>
      </Link>
    </div>
  );
}

export default NavContactButton;
