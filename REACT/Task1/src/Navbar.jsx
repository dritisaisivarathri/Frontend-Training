import React from 'react'

const Navbar = () => {
  return (
    <div style={{backgroundColor:'palevioletred',height:'50px',margin:'0px',textAlign:'center',paddingTop:"15px"}}>
      <a style={{color:'white',margin:'20px',textDecoration:'none',fontSize:'20px',fontWeight:'bolder'}} href="">Home</a>
      <a style={{color:'white',margin:'20px',textDecoration:'none',fontSize:'20px',fontWeight:'bolder'}} href="">About</a>
      <a style={{color:'white',margin:'20px',textDecoration:'none',fontSize:'20px',fontWeight:'bolder'}}href="">Contact Us</a>
    </div>
  )
}

export default Navbar
