import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <p>Event Medical Staffing</p>
      </div>
      <nav className="header-nav-container">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
