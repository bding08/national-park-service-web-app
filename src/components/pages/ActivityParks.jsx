import React from "react";
import ActivityAPISearch from "../API/ActivityAPISearch";
import ParksContainingActivity from "../API/ParksContainingActivity";

const ActivityParks = (props) => {
  return (
    <div>
      <ActivityAPISearch placeholder="Enter an Activity Name..." />
      <ParksContainingActivity activity={props.location.state} />
    </div>
  );
};

export default ActivityParks;
