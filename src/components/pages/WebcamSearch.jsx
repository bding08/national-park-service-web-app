import React from "react";
import WebcamsAPI from "../API/WebcamAPIParkSearch";

const WebcamSearch = () => {
  return (
    <div>
      <WebcamsAPI placeholder="Enter a Park For Webcams..." />
    </div>
  );
};

export default WebcamSearch;
