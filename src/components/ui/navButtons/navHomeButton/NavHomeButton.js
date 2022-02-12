import { Link } from "react-router-dom";
import "./assets/navHomeButton.css";

function NavHomeButton(props) {
  return (
    <div className="link-container">
      <Link to="/">
        {props.arrow}
        <p>Home</p>
      </Link>
    </div>
  );
}

export default NavHomeButton;
