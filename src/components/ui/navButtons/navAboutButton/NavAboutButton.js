import { Link } from "react-router-dom";
import "./assets/navAboutButton.css";
import Arrow from "../assets/arrow.svg";

function NavAboutButton() {
  return (
    <div className="link-container">
      <Link to="/about">
        <div className="arrow-right">
          <img src={Arrow} alt="" />
        </div>
        <p>About</p>
      </Link>
    </div>
  );
}

export default NavAboutButton;
