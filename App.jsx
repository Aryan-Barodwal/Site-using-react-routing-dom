import React from 'react'
import './index.css'

import Navbarr from "./components/Navbarr";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";
import Github from "./components/Github";
import Test from './components/Test';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbarr />
          <Test/>
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbarr />
          <Test/>
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbarr />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbarr />
          <About />
          <Footer />
        </>
      ),
    },
    {
      // loader: { githubInfoLoader },
      path: "/Github",
      // path: "/Github/:username", // Then use params!!
      element: (
        <>
          <Navbarr />
          <Github />
          <Footer />
        </>
      ),

      
    },
  ]);


  return (
    
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
