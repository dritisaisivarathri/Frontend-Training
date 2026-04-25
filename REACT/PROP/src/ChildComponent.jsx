import React from 'react'

const ChildComponent = (pro) => {
    console.log(pro);  //creartes object
    console.log(pro.uname);  //to access that object
    let{uname,mark,profile,skills} = pro;
    
    // pro.uname='lasya sai'; //we cant modify them they are readonly property in childcomponent
  return (
    <div>
        <h1>Child Component</h1>
        <h2>{uname}{mark}</h2>
        <p>{profile}</p>
        {/* accepting array */}
        <ul>
        {
            skills.map((skills,index)=>
                <li key={index}>{skills}</li>
            
            )
        }
        </ul>

    </div>
  )
}

export default ChildComponent
