import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {
    let {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div style={{padding:'20px', background:theme==='light'?'#eee':'#222',color:theme==='light'?'#ff0606':'#c9fc11'}}>
      <h1>Navbar</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Navbar
