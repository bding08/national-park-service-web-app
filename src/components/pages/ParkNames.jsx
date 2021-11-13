import "../../App.css";
import React from "react";
import ParkNameSearch from "../API/ParkNameSearch";

const ParkNames = () => {
  return (
    <>
      <ParkNameSearch placeholder="Enter a Park Name..." />
    </>
  );
};

export default ParkNames;
