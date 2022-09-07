import React, { useState } from "react";

function PlantCard({plant: {name, image, price}}) {

  const [isInStock, setIsInStock] = useState(true)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={()=>{setIsInStock(false)}} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>{setIsInStock(true)}}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
