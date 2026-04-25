import React from 'react'
import ChildComponent from './ChildComponent';
import cricketer from "../src/image.png"

const ParentComponent = () => {
    let userName = 'driti sai';
    let marks = 50;
    let profile = <img src={cricketer} alt="" />
    let skills=['js','Ts','java'];
  return (
    <div>
      <h1>Parent Component</h1>
      {/* <h1>{userName}</h1> */}
      {/* call child component */}
      <ChildComponent uname={userName} mark={marks} profile={profile} skills={skills}/>
    </div>
  )
}

export default ParentComponent 
