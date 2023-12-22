import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import PostList from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'
import { getPosts } from './App.jsx' 

const route = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    loader: getPosts, 
    children: [
      { path: "/post-list", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
