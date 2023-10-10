import logo from "./logoroot.png";
import "./App.css";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import NavBar from "./components/NavBar";
import FilterTab from "./components/FilterTab";
import DataList  from "./components/DataList";
import Footer from "./components/Footer";
const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Inter", sans-serif;
  }

  body {
    font-family: var(--font-family);
  }
`;
function App() {
  return (
    <>
    <GlobalStyle/>
    {<div className="App">
      <header>
      </header>
      <body>
        <NavBar/>
        <div className="banner-rectangle">
              <div className="banner">
                <div className="banner-text">
                  <h3>Chào mừng đến với Dream Home</h3>
                  <h1>KHÁM PHÁ KHÔNG GIAN SỐNG LÝ TƯỞNG</h1>
                  <p>
                    Lorem facilisis convallis quam sit varius. Enim nibh odio
                    phasellus sem at sed id ut arcu. In turpis tortor diam
                    mauris mauris magna adipiscing eu.{" "}
                  </p>
                </div>
                <div className="banner-image">
                  <img src="/assets/banner-image.png" alt="Banner Image" />
                </div>
              </div>
            </div>
            <FilterTab/>
            <DataList/>
      </body> 
      <footer>
        <Footer/>
      </footer>
       </div> }</>
      
  );
}

export default App;
