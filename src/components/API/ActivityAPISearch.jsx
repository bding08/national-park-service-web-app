import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./ActivityAPI.css";

function SearchBar({ placeholder }) {
  const url = `https://developer.nps.gov/api/v1/activities/parks?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb`;

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [activities, setActivities] = useState({
    data: null,
  });

  useEffect(() => {
    setActivities({
      data: null,
    });
    axios.get(url).then((response) => {
      setActivities(response.data);
    });

    // do catching at a later time
    // .catch(() => {
    //   setActivities({
    //     data: null,
    //   });
    // });
  }, [url]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = activities.data.filter((value) => {
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
              <a className="dataItem" href={value.ult} target="_blank">
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
