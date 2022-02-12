import "./assets/micCrunch.css";
import Logo from "./assets/emsCrunchLogo/EMSCrunchLogo";
import PosterFrame from "./assets/images/crunch-background-frame.svg";
import FrameBottom from "./assets/images/crunch-background-bottom.svg";
import BackgroundBlob from "./assets/images/crunch-background-blob.svg";
import BackgroundSpeckles from "./assets/images/crunch-background-speckles.svg";
import DogHead from "./assets/images/crunch-head.svg";
import DogBody from "./assets/images/crunch-body.svg";
import DogJaw from "./assets/images/crunch-jaw.svg";

function MicCrunch(props) {
  return (
    <div className="poster-container">
      <div className="poster-content crunch-content">
        <div className="top-crunch-container">
          <Logo />
        </div>
        <div className="bottom-crunch-container">
          <p className="crunch-page-name">{props.pageName}</p>
          <p className="crunch-content">{props.bodyContent}</p>
        </div>
      </div>
      <div className="poster-background crunch-background">
        <img
          className="crunch-poster-speckles"
          src={BackgroundSpeckles}
          alt=""
        />
        <img className="crunch-poster-blob" src={BackgroundBlob} alt="" />
        <div className="crunch-dog-container">
          <img className="crunch-dog-head" src={DogHead} alt="" />
          <img className="crunch-dog-jaw" src={DogJaw} alt="" />
          <img className="crunch-dog-body" src={DogBody} alt="" />
        </div>
        <img className="crunch-poster-frame-bottom" src={FrameBottom} alt="" />
        <img className="crunch-poster-frame" src={PosterFrame} alt="" />
      </div>
    </div>
  );
}

export default MicCrunch;
