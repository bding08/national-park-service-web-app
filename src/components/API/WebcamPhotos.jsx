import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardItem from "../CardItem";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

const WebcamPhotos = (props) => {
  const parkCode = props.webCamParkCode;

  const webcamsURL = `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=196`;

  let parkName = null;

  const [parkWebcamURLs, setParkWebcamURLs] = useState({
    data: null,
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
    if (parkWebcamURLs.total > 0) {
      content = parkWebcamURLs.data.map((cam) => (
        <div>
          <div className="cards__container">
            <div className="cards__wrapper">
              <u1 className="cards__items">
                {cam.images.map((image) => (
                  <CardItem
                    src={image.url}
                    text={image.caption}
                    label="Adventure"
                    //path={image.url}
                  />
                  // <img src={image.url} alt={image.altText} />
                ))}
              </u1>
            </div>
          </div>
        </div>
      ));
    } else {
      content = (
        <div>
          <div className="cards__container">
            <div className="cards__wrapper">
              <u1 className="cards__items">No images</u1>
            </div>
          </div>
        </div>
      );
    }
  } else {
    content = <div> No images </div>;
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
