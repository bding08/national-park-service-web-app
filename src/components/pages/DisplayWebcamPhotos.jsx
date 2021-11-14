import React from "react";
import WebcamPhotos from "../API/WebcamPhotos";
import { useLocation } from "react-router-dom";

const DisplayWebcamPhotos = (props) => {
  const location = useLocation();
  const parkCode = location.state?.parkCode;

  return (
    <div>
      <WebcamPhotos webCamParkCode={parkCode} />
    </div>
  );
};

export default DisplayWebcamPhotos;
