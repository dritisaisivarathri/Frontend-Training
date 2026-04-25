import React from 'react'

const FoodCard = (pro) => {
    console.log(pro);
    let{foodData} = pro;
    
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
      {
        foodData.map((item) => (
        <div key={item.id}>
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} width="150" height="100px" />
        <p>Price: ₹{item.price}</p>
        </div>
        ))
     }
    </div>
  )
}

export default FoodCard
