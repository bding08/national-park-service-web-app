import React from "react";
import ParkInformation from "../API/ParkAPIInfo";
import { useLocation } from "react-router-dom";

const ParkInfo = (props) => {
  const location = useLocation();
  const parkCode = location.state?.parkCode;
  
  return (
    <div>
      <ParkInformation parkCode={parkCode} />
    </div>
  );
};

export default ParkInfo;
