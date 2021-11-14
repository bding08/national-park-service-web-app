import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const WebcamPhotos = () => {
  // const parkWebcams = props.parkWebcams;

  const webcamsURL = `https://developer.nps.gov/api/v1/webcams?parkCode=gumo&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=196`;

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

  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3">Acadia Park Webcams</h1>
      {content}
    </div>
  );
};

export default WebcamPhotos;
