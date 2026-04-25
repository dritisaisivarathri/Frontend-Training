import React from 'react'
import Navbar from './Navbar'
// import Footer from './Footer'
import Z from "./Footer"; //we can use any name while importing default export

import { Endfooter } from './Footer'; //we need to do object destructuring while importing named export and use same name

const App = () => {
  return (
    <div>
      <Navbar/>
      App
      <Z/>
     <Endfooter/>
    </div>
  )
}

export default App
