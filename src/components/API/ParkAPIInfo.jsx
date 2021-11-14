import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ParkAPIInfo = (props) => {
  const parkCode = props.parkCode;

  const parkInfoURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb`;

  console.log(parkInfoURL);
  const [parkInfo, setParkInfo] = useState({
    data: null,
    // activity: props.activty,
  });

  useEffect(() => {
    setParkInfo({
      data: null,
    });
    axios.get(parkInfoURL).then((response) => {
      setParkInfo(response.data.data[0]);
    });
  }, [parkInfoURL]);

  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3">
        {parkInfo.fullName} Park Information
      </h1>
      <a className="dataItem">
        <p> Description: {parkInfo.description} </p>
        <p> Latitude: {parkInfo.latitude}</p>
      </a>
    </div>
  );
};

export default ParkAPIInfo;
