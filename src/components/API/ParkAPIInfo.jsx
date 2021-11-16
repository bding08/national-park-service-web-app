import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ActivityAPI from "./backupFILE";
import "./parkInfo.css";

const ParkAPIInfo = (props) => {
  const parkCode = props.parkCode;

  const parkInfoURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=F86AM1ZQ4ihB8e93PVICva7sATwOw0YaC0oXvIVb&limit=465`;

  const [parkInfo, setParkInfo] = useState({
    data: null,
    // activity: props.activty,
  });

  const [opHrs, setOpHrs] = useState({ data: null });

  const [contacts, setContacts] = useState({ voice: "", email: "" });

  useEffect(() => {
    setParkInfo({
      data: null,
    });
    axios.get(parkInfoURL).then((response) => {
      setParkInfo(response.data.data[0]);
    });
  }, [parkInfoURL]);

  useEffect(() => {
    axios.get(parkInfoURL).then((response) => {
      setParkInfo(response.data.data[0]);
      setOpHrs(response.data.data[0].operatingHours[0].standardHours);
    });
  }, [parkInfoURL]);

  useEffect(() => {
    axios.get(parkInfoURL).then((response) => {
      setParkInfo(response.data.data[0]);
      setOpHrs(response.data.data[0].operatingHours[0].standardHours);
      setContacts({
        voice: response.data.data[0].contacts.phoneNumbers[0].phoneNumber,
        email: response.data.data[0].contacts.emailAddresses[0].emailAddress,
      });
    });
  }, [parkInfoURL]);

  // let contacts = null;

  // if (parkInfo.data) {
  //   contacts = parkInfo.data.contacts.map((parkActivityInfo) => (
  //     <div>{parkActivityInfo.phoneNumbers}</div>
  //   ));
  // }

  // console.log(contacts);

  return (
    <div>
      <h1 className="font-bold text-2x1 mb-3">
        {parkInfo.fullName} Park Information
      </h1>
      <a className="dataItem">
        <h2 className="headerTwo">Description</h2>

        <p> {parkInfo.description} </p>

        <h2>Latitude and Longitude </h2>
        <p>{parkInfo.latLong}</p>

        <h2>Directions Information </h2>
        <p>{parkInfo.directionsInfo}</p>

        <h2>Park URL </h2>
        <a className="dataItem" href={parkInfo.url} target="_blank">
          <p>{parkInfo.url} </p>
        </a>

        <h2>Operating Hours</h2>
        <p>Sunday: {opHrs.sunday}</p>
        <p>Monday: {opHrs.monday}</p>
        <p>Tuesday: {opHrs.tuesday}</p>
        <p>Wednesday: {opHrs.wednesday}</p>
        <p>Thursday: {opHrs.thursday}</p>
        <p>Friday: {opHrs.friday}</p>
        <p>Saturday: {opHrs.saturday}</p>

        <h2> Contacts</h2>
        <p>Phone number: {contacts.voice}</p>
        <p>Email: {contacts.email}</p>
        <p></p>

        <h2>Weather</h2>
        <p>{parkInfo.weatherInfo}</p>
      </a>
    </div>
  );
};

export default ParkAPIInfo;
