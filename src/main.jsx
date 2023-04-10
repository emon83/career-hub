import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('featuredJobs.json')
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails/>,
        loader: () => fetch(`/featuredJobs.json`)
      },
      {
        path: 'statistics',
        element: <Statistics/>,
        loader: () => fetch('assignmentData.json') 
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs/>,
      },
      {
        path: 'blog',
        element: <Blog/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
