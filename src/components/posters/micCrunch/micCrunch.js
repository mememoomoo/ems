import "./assets/micCrunch.css";

const posterBackground = {
  backgroundColor: "#3c8476",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function MicCrunch(props) {
  return (
    <div style={posterBackground} className="poster-container">
      <div className="poster-content">
        <p>{props.logoText}</p>
        <p>{props.pageName}</p>
        <p>{props.bodyContent}</p>
      </div>
    </div>
  );
}

export default MicCrunch;
