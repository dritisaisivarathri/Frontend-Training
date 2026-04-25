import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';


const App = () => {
    let router1 = createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
            children:[
                {
                    path:'dashboard',
                    element:<Dashboard/>
                },
            ]
        },
        {
            path:'/about',
            element:<About/>
        }
   ] )
  return (
    <div>
     <RouterProvider router={router1}> App </RouterProvider>
    </div>
  )
}

export default App
