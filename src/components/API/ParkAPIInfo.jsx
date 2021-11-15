import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ActivityAPI from "./backupFILE";

const ParkAPIInfo = (props) => {
  const parkCode = props.parkCode;

  const parkInfoURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=465`;

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

  // let contacts = null;

  // if (parkInfo.data) {
  //   contacts = parkInfo.data.contacts.map((parkActivityInfo) => (
  //     <div>{parkActivityInfo.phoneNumbers}</div>
  //   ));
  // }

  // console.log(contacts);

  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3">
        {parkInfo.fullName} Park Information
      </h1>
      <a className="dataItem">
        <p> Description: {parkInfo.description} </p>
        <p>Latitude and Longitude: {parkInfo.latLong}</p>
        <p>Directions Information: {parkInfo.directionsInfo}</p>
        <a className="dataItem" href={parkInfo.url} target="_blank">
          <p>Park URL: {parkInfo.url} </p>
        </a>

        {/* <p>
          Monday Operating Hours:
          {parkInfo.entranceFees[0].cost}
        </p> */}

        {/* <p>Contact Information: {contacts}</p> */}
      </a>
    </div>
  );
};

export default ParkAPIInfo;
