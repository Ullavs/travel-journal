import React from "react";
import Header from "./components/Header";
import TravelCard from "./components/TravelCard";
import travelPlaces from "./data/travel-places";

export default function App() {
  const travelCards = travelPlaces.map((travelPlace) => {
    return <TravelCard key={travelPlace.id} {...travelPlace} />;
  });

  return (
    <div className="container">
      <Header />
      <section className="travel-cards">{travelCards}</section>
    </div>
  );
}
