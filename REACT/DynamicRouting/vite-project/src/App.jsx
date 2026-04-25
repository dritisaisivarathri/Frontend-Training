// import React from 'react'
// import Home from './pages/Home'
// import User from './pages/User'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// let userrouter = createBrowserRouter([
//     {
//         path:'/',
//         element:<Home/>
//     },
//     {
//         path:'/user/:id',
//         element:<User/>

//     }
// ])
// const App = () => {
//   return (
//     <RouterProvider router={userrouter}>
//       App
//     </RouterProvider>
//   )
// }

// export default App


// ! PROTECTED ROTIG
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './auth/Home'
import Login from './auth/Login'
import Protect from './auth/Protect'
import Dashboard from './auth/Dashboard'

let router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:(
            <Protect>
                <Dashboard/>
            </Protect>
        )
    }
])
const App = () => {
  return (
     <RouterProvider router={router}>
      <h1>App Component</h1>
      </RouterProvider>
    
  )
}

export default App
