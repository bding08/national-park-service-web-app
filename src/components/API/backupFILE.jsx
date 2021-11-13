import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActivityAPI.css";

function ActivityAPI() {
  const url = `https://developer.nps.gov/api/v1/activities?api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb`;
  const [activities, setActivities] = useState({
    data: null,
  });
  const [serachTitle, setSearchTitle] = useState("");

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

  // UNCOMMENT FOR ORIGINAL
  let content = null;

  //CHECKS FOR ERRORS
  // if (activities.error) {
  //   content = <p>There was an error please refresh or try again later.</p>;
  // }

  // UNCOMMENT FOR ORIGINAL
  if (activities.data) {
    content = activities.data.map((activity) => <div>{activity.name}</div>);
  }

  // this is for the loading animation, need to import CSS for it
  // if(activities.loading){
  //   content = <Loader> </Loader>
  // }

  // ORIGINAL RETURN STATEMENT (WORKS)
  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3">Activities</h1>
      <input type="text" placeholder="Search..." />

      {content}
    </div>
  );
}
export default ActivityAPI;
