import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "./APISearchBar.css";

const ParkNameSearch = ({ placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [parkName, setParkName] = useState({
    data: null,
  });

  const url = `https://developer.nps.gov/api/v1/parks?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=465`;

  useEffect(() => {
    console.log("hello");
    axios.get(url).then((response) => {
      setParkName(response.data);
      console.log(response.data);
    });
  }, []);

  console.log("sample1: ");
  console.log(parkName);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = parkName.data.filter((value) => {
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
              <a className="dataItem" href={value.url} target="_blank">
                <p>{value.fullName} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ParkNameSearch;
