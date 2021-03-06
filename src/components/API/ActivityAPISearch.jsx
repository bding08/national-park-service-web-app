import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./APISearchBar.css";

function ActivityAPISearch({ placeholder }) {
  const url = `https://developer.nps.gov/api/v1/activities/parks?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb`;

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [activities, setActivities] = useState({
    data: null,
  });

  useEffect(() => {
    axios.get(url).then((response) => {
      setActivities(response.data);
    });

    // do catching at a later time
    // .catch(() => {
    //   setActivities({
    //     data: null,
    //   });
    // });
  }, []);

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
              <Link
                className="dataItem"
                to={{
                  pathname: "/parkactivity",
                  state: value.name,
                }}
              >
                {value.name}
              </Link>
              // <a className="dataItem" href="/parkactivity">
              //   <p>{value.name} </p>
              // </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ActivityAPISearch;
