// src/router/index.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]

export default createBrowserRouter(routes, {
  basename: '/',
})
