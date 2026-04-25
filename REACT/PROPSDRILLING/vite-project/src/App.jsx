import React from 'react'
import Parent from './pages/Parent'

const App = () => {
    let userName = 'driti sai';
  return (
    <div>
      <h1>App Component</h1>
      <Parent name={userName}/>
    </div>
  )
}

export default App
