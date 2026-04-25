// ! STATE : STATE IS NORMAL JS OBJECT WHICH IS RESPONSIBLE TO HOLD DATA,
// ! AND UPDATE IT ACCORDING TO CHANGES

// ! FUNCTIONAL BASED COMPONENTS ARE STATELESS COMPONENT
// ! IF WE WANT TO MAKE FUNCTIONAL BASED COMPONENTS AS STATEFUL COMPONENTS WE NEED TO USE HOOK() THAT IS USESTATE()

// ! USESTATE():- IT IS REACT HOOK WHICH RETURNS 1 ARRAY WHO CONTAINS 2 ELEMENTS INSIDE IT...
// ! 1 IS STATE, ANOTHER IS UPDATER FUNCTION TO UPDATE THAT STATE..ALSO USESTATE IS ACCEPTING 1 INITIAL VALUE

// !SYNTAX: 
// [state, setState] = useState(initial value)

// import React, { useState } from 'react'

// const App = () => {

//   let [count,setCount] = useState(0)
//    console.log(count);

//    to update use setCount() because it is used for updater value
//    let increment=()=>{
//     setCount(count=count+1);

//    }

//    let decrement=()=>{
//     setCount(count>0?count-1:count);
//    }

//    let reset=()=>{
//     setCount(count=0);
//    }
// return (
//     <div>
//         <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App

// !18-04-26
// !ARRAY KIND OF DATA
// import React, { useState } from 'react'

// const App = () => {
//   let users = ['subodh','vishnu','sai']
// let[name,setName]=useState(users)
// console.log(name);

// let setUser=()=>{
//   setName([...name,'driti'])      //used spread to use the before nammes present
// }

//   return (
//     <div>
//       <ul>
//         {
//           name.map((item,index)=>(
//             <li key={index}>
//               {item}
//             </li>
//           ))
//         }
//       </ul>
//       <button onClick={setUser}>Add User</button>
//     </div>
//   )
// }

//  export default App

// ! OBJECT KIND OF DATA'
// import React, { useState } from 'react'

// const App = () => {
//  let[user,setUser]= useState({
//   userName:'driti sai',
//   marks:80
//  });
//  console.log(user);
// // !function to update marks
//  let updateMarks=()=>{
//   setUser({...user,marks:user.marks+10})
//  }
 
//   return (
//     <div>
//       <h2>{user.userName} {user.marks}</h2>
//       <button onClick={updateMarks}>Increase Marks</button>
//     </div>
//   )
// }

// export default App

// !NULL
import React, { useState } from 'react'
const App = () => {
 let [data,setData]=useState(null)
 console.log(data);
  return (
    <div>
      {
        data?<h3>{data}</h3>:<h3>NO DATA</h3>
      }
      <button onClick={()=>setData('Data Loaded..')}>CHANGE</button>
    </div>
  )
}

export default App



