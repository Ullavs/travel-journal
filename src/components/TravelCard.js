import React from "react";

export default function TravelCard(props) {
  return (
    <div className="travel-card">
      <div className="travel-card-image">
        <img
          src={`../images/${props.img}`}
          alt={props.alt}
          width="125"
          height="168"
        />
      </div>
      <div className="travel-card-details">
        <img
          src="../images/location-icon.png"
          alt=""
          height="10"
          width="7"
          className="travel-card-icon"
        />
        <h3 className="travel-card-country">{props.country}</h3>
        <a href={props.link} className="travel-card-link">
          View on Google Maps
        </a>
        <h2 className="travel-card-title">{props.title}</h2>
        <p className="travel-card-dates">{props.date}</p>
        <p className="travel-card-description">{props.description}</p>
      </div>
    </div>
  );
}
