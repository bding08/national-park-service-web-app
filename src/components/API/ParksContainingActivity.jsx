import React, { useState, useEffect } from "react";
import axios from "axios";

const ParksContainingActivity = (props) => {
  const activity = props.activity;

  const activityURL = `https://developer.nps.gov/api/v1/activities/parks?q=%22${activity}%22&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb`;

  const [parksContainingActivity, setParksContainingActivity] = useState({
    data: null,
    // activity: props.activty,
  });

  useEffect(() => {
    setParksContainingActivity({
      data: null,
    });
    axios.get(activityURL).then((response) => {
      setParksContainingActivity(response.data);
    });
  }, [activityURL]);

  let content = null;

  if (parksContainingActivity.data) {
    content = parksContainingActivity.data[0].parks.map(
      (parkContainingActivity) => <div>{parkContainingActivity.fullName}</div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3">Parks Containing {activity}</h1>
      {content}
    </div>
  );
};

export default ParksContainingActivity;
