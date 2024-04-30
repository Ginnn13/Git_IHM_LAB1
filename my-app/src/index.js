import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import Carruselyo from "./carrusel";
import Aside from "./aside";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Basic from './layout/basic';
import Single from './single';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Basic/>,
      children: [
        {
            path:'',
            element: <>
                <div className='col-md-8'>
                    <Carruselyo></Carruselyo>
                </div>
                <div className='col-md-4'>
                    <Aside></Aside>
                </div>
            </>
          },
          {
            path:"detalle/:slug",
            element: <Single/>
          },
      ], 
    },   
  ]);

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
},1000);

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode> 
        <RouterProvider router={router} />
    </StrictMode>
    
);
