import React from 'react'

const GrandChild = ({name}) => {
    console.log(name);
    
  return (
    <div>
      <h1>GrandChild Component</h1>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default GrandChild
