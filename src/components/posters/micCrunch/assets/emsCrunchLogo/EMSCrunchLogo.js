import "./emscrunchlogo.css";
import Logo from "./ems-crunch-logo.svg";

function EMSCrunchLogo() {
  return (
    <div className="crunch-logo">
      <img src={Logo} alt="Event Medical Staffing Logo" />
      <div className="crunch-logo-text">
        <p>Event</p>
        <p>Medical Staffing</p>
      </div>
    </div>
  );
}

export default EMSCrunchLogo;
