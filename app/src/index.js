import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/error';
import Admin from './pages/admin';
import Insert from './pages/insert';
import Get from './pages/get';
import Update from './pages/update';
import Delete from './pages/delete';


const routes = createBrowserRouter(
  [
    {
      path : '/',
      element : <App/>,
      errorElement : <Error/>
    },
    {
      path : '/admin',
      element : <Admin/>,
      errorElement : <Error/>,
      children : [
        {
          path: '/admin/insert',
          element : <Insert/>,
          errorElement : <Error/>
        },
        {
          path : '/admin/get',
          element : <Get/>,
          errorElement : <Error/>
        },
        {
          path : '/admin/update',
          element : <Update/>,
          errorElement : <Error/>,
          children : [
            {
              path : '/admin/update/:word',
              element : <Update/>,
              errorElement : <Error/>,
            }
          ]
        },
        {
          path : '/admin/delete',
          element : <Delete/>,
          errorElement : <Error/>
        },
      ]
    }


  ]
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
