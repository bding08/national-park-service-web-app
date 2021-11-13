import React from "react";
import WebcamsAPI from "../API/WebcamsAPI";

const WebcamSearch = () => {
  return (
    <div>
      <WebcamsAPI placeholder="Enter a Park name for photos..." />
    </div>
  );
};

export default WebcamSearch;
