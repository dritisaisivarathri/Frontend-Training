// import React from 'react'
// import { useParams } from 'react-router-dom'

// const User = () => {
//     let{id} = useParams()
//   return (
//     <div>
//       <h1>User Page</h1>
//       <h3>User Id: {id}</h3>
//     </div>
//   )
// }
// export default User

// !--
import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'

const User = () => {
    let {id} = useParams();
    let[user, setUser]=useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data));
    },[id])
  return (
    <div>
        <h1>User Data</h1>
        {
            user&& <h2>{user.name}</h2>
        }
      <Link to='/'>Back To Home</Link>
    </div>
  )
}

export default User

