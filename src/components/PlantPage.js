import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  // when first rendered, get plant data
  useEffect(() => {
    fetch("http://localhost:6001/plants").then((r)=>r.json()).then((data)=>{
      setPlants(data)
    })
  }, [])

  // filter out stuff
  const filteredPlants = plants.filter((plant)=>plant.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={(plant)=>setPlants([...plants, plant])} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
