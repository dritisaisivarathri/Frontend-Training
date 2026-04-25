import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Setting from './Setting'
import { Route, Routes } from 'react-router'



const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element=<Home />  />
            <Route path="/dashboard" element=<Dashboard  /> >

             <Route path="profile" element=<Profile /> /> 
              <Route path="setting" element=<Setting /> /> 
            
            </Route>
            
        </Routes>
      
    </div>
  )
}

export default App