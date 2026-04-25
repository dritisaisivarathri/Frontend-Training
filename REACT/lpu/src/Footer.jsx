// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       Footer
//     </div>
//   )
// }

// export default Footer

// ! DEFAULT EXPORT
// let Footer=()=>{
//   return<h1>Footer Component</h1>
// }
// export default Footer;  //inside 1 file we need to have only 1 defeault  component
// if you want more use named component

// ! NAMED EXPORT
export let Endfooter=()=>{
  return(
  <p> End Footer Component</p>
  )
}

// ! FRAGMENT
import { Fragment } from "react"
const  Footer = ()=>{
  let userName = 'driti';
  return(
    //IF YOU DONT WANT TO IMPORT WRITE <React.Fragment></React.Fragment>
    <Fragment>        
      <h1 className="" style={{backgroundColor:'red', color:'yellow'}}>Welcome {userName}</h1>
      <form action="">
        <label htmlFor=""></label>
      </form>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis hic minima ut excepturi similique quo, ea quaerat, magnam quia accusamus totam, reprehenderit qui? Dolorum id maiores voluptates? Aliquid, maxime. Ipsam, molestias ratione esse et laboriosam minus! Ex nostrum nihil tempore deleniti quod blanditiis odio dolores repudiandae fugit rem. Odio, magni!</p>
    </Fragment>
  )
}
export default Footer;