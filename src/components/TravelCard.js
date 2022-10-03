import React from "react";

export default function TravelCard({
  img,
  alt,
  country,
  link,
  title,
  date,
  description,
}) {
  return (
    <div className="travel-card">
      <div className="travel-card-image">
        <img src={`../images/${img}`} alt={alt} width="125" height="168" />
      </div>
      <div className="travel-card-details">
        <img
          src="../images/location-icon.svg"
          alt=""
          height="10"
          width="7"
          className="travel-card-icon"
        />
        <h3 className="travel-card-country">{country}</h3>
        <a href={link} className="travel-card-link">
          View on Google Maps
        </a>
        <h2 className="travel-card-title">{title}</h2>
        <p className="travel-card-dates">{date}</p>
        <p className="travel-card-description">{description}</p>
      </div>
    </div>
  );
}
