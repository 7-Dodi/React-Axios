import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { NewProject } from './routes/NewProject.jsx'
import EditProject from './routes/DetailsProject.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/newProject',
        element: <NewProject/>
      },{
        path:'/editProject/:id',
        element: <EditProject/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
