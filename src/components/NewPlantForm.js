import { useState } from "react";

function NewPlantForm({addPlant}) {
  const [plantFormData, setPlantFormData] = useState({
    name: "",
    image: "",
    price: null
  })

  function handleChange(event) {
    let value = event.target.value 
    if (event.target.name === "price") {
      value = parseFloat(value)
    }

    setPlantFormData({
      ...plantFormData,
      [event.target.name]: value,
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    // send request to add our new plant
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantFormData) 
    }).then(r=>r.json()).then((data)=>{ // parse response
      addPlant(data) // add it to our local plants
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
