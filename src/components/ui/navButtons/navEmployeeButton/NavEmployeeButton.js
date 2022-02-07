import { Link } from "react-router-dom";
import "./assets/navEmployeeButton.css";

function NavEmployeeButton() {
  return (
    <div className="link-container">
      <Link to="/employee">
        <p>Employee</p>
      </Link>
    </div>
  );
}

export default NavEmployeeButton;
