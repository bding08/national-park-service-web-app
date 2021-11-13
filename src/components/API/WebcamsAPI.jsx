import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./APISearchBar.css";

const WebcamsAPI = ({ placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [parkName, setParkName] = useState([]);
  const [webCamPictures, setWebCamPictures] = useState([]);

  const parkURL = `https://developer.nps.gov/api/v1/parks?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=465`;
  const webCamURL = `https://developer.nps.gov/api/v1/webcams?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=196`;

  const getParkName = axios.get(parkURL);
  const getWebCamPics = axios.get(webCamURL);

  axios.all([getParkName, getWebCamPics]).then(
    axios.spread((...allData) => {
      const getAllParkNames = allData[0].data.fullName;
      const getAllWebCamPics = allData[1];
    })
  );

  // useEffect(() => {
  //   setParkName({
  //     data: null,
  //   });
  //   axios.get(url).then((response) => {
  //     setParkName(response.data);
  //   });
  // }, [url]);

  // return (
  //   <div className="search">
  //     <div className="searchInputs">
  //       <input
  //         type="text"
  //         placeholder={placeholder}
  //         value={wordEntered}
  //         onChange={handleFilter}
  //       />
  //       <div className="searchIcon">
  //         {filteredData.length === 0 ? (
  //           <SearchIcon />
  //         ) : (
  //           <CloseIcon id="clearBtn" onClick={clearInput} />
  //         )}
  //       </div>
  //     </div>
  //     {filteredData.length != 0 && (
  //       <div className="dataResult">
  //         {filteredData.slice(0, 15).map((value, key) => {
  //           return (
  //             <a className="dataItem" href={value.parks} target="_blank">
  //               <p>{value.fullName} </p>
  //             </a>
  //           );
  //         })}
  //       </div>
  //     )}
  //   </div>
  // );
};

export default WebcamsAPI;
