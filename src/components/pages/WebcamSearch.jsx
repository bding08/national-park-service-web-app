import React from "react";
import WebcamsAPI from "../API/WebcamAPIParkSearch";

const WebcamSearch = () => {
  return (
    <div>
      <WebcamsAPI placeholder="Enter a Park Name ..." />
    </div>
  );
};

export default WebcamSearch;
