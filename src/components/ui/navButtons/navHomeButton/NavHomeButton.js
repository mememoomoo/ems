import { Link } from "react-router-dom";
import "./assets/navHomeButton.css";

function NavHomeButton() {
  return (
    <div className="link-container">
      <Link to="/">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default NavHomeButton;
