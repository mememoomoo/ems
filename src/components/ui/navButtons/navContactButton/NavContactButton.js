import { Link } from "react-router-dom";
import "./assets/navContactButton.css";

function NavContactButton(props) {
  return (
    <div className="link-container">
      <Link to="/contact">
        {props.arrow}
        <p>Contact</p>
      </Link>
    </div>
  );
}

export default NavContactButton;
