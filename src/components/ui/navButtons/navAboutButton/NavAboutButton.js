import { Link } from "react-router-dom";
import "./assets/navAboutButton.css";

function NavAboutButton(props) {
  return (
    <div className="link-container">
      <Link to="/about">
        {props.arrow}
        <p>About</p>
      </Link>
    </div>
  );
}

export default NavAboutButton;
