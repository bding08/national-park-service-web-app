import axios from "axios";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./APISearchBar.css";

const WebcamAPIParkSearch = ({ placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [parkWebCamURLs, setParkWebCamURLs] = useState({
    data: null,
  });

  const webCamURL = `https://developer.nps.gov/api/v1/parks?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=465`;

  useEffect(() => {
    setParkWebCamURLs({
      data: null,
    });
    axios.get(webCamURL).then((response) => {
      setParkWebCamURLs(response.data);
    });
  }, [webCamURL]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = parkWebCamURLs.data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link
                className="dataItem"
                to={{
                  pathname: "/webcamphotos",
                  state: { parkCode: value.parkCode },
                }}
              >
                {value.fullName}
              </Link>
              // <a className="dataItem" href="/webcamphotos">
              //   <p>{value.name} </p>
              // </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WebcamAPIParkSearch;
