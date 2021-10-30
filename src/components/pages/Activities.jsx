import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import ActivityAPISearch from "../API/ActivityAPISearch";

const Activities = () => {
  return (
    <>
      <ActivityAPISearch placeholder="Enter an Activity Name..." />
    </>
  );
};

export default Activities;
