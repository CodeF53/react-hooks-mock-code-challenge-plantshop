import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantCards = plants.map((plant)=>{
    return (
      <PlantCard plant={plant} key={plant.id}/>
    )
  })

  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
