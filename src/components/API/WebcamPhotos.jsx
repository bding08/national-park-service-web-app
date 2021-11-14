import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardItem from "../CardItem";

const WebcamPhotos = (props) => {
  const parkCode = props.webCamParkCode;

  const webcamsURL = `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=196`;

  let parkName = null;

  const [parkWebcamURLs, setParkWebcamURLs] = useState({
    data: null,
    // activity: props.activty,
  });

  useEffect(() => {
    setParkWebcamURLs({
      data: null,
    });
    axios.get(webcamsURL).then((response) => {
      setParkWebcamURLs(response.data);
    });
  }, [webcamsURL]);

  let content = null;

  if (parkWebcamURLs.data) {
    content = parkWebcamURLs.data.map((cam) => (
      <div>
        {cam.images.map((image) => (
          <img src={image.url} alt={image.altText} />
        ))}
      </div>
    ));
  }

  if (parkWebcamURLs.data) {
    parkWebcamURLs.data.map((c) => (
      <div>{(parkName = c.relatedParks[0].fullName)}</div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3"> {parkName} Park Webcams</h1>
      {content}
    </div>
  );
};

export default WebcamPhotos;
