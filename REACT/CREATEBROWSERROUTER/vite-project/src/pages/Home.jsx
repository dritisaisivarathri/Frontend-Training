import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <nav>
      <Link to='/about'>About</Link> | {" "}
      <Link to='dashboard'>Dashboard</Link>
      </nav>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Home
