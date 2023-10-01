import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Products } from "./components/products";
import contents from "./contents";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Inter", sans-serif;
  }

  body {
    font-family: var(--font-family);
  }
`;
function App() {
  const [ServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [superficialityFilter, setSuperficialityFilter] = useState("");
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!ServicesDropdownOpen);
  };

  const openServicesDropdown = () => {
    setServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    setServicesDropdownOpen(false);
  };
  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };
  return (
    <>
      <GlobalStyle />
      {
        <div className="App">
          <header></header>
          <body>
            <div className="rectangle2">
              <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="rectangle3">
                <div className="navigation">
                  <button>Bán</button>
                  <button>Thuê</button>
                  <button>Tin tức</button>
                  <button>Dự án</button>
                  <button>On Sale</button>
                </div>
                <img
                  src="/assets/search.png"
                  alt="Search"
                  className="search-button"
                />
              </div>
              <div className="other-service">
                <div className="dropdown">
                  <button
                    className="dropdown-button"
                    onMouseEnter={openServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                  >
                    Dịch vụ khác{" "}
                    {ServicesDropdownOpen ? (
                      <img
                        src="/assets/up-arrow.png"
                        alt="Up Arrow"
                        className="arrow-button"
                      />
                    ) : (
                      <img
                        src="/assets/down-arrow.png"
                        alt="Down Arrow"
                        className="arrow-button"
                      />
                    )}
                  </button>
                  {ServicesDropdownOpen && (
                    <div className="dropdown-content">
                      <a href="#">Service 1</a>
                      <a href="#">Service 2</a>
                      <a href="#">Service 3</a>
                    </div>
                  )}
                </div>
              </div>
              <div className="sign-in">
                <button>Đăng nhập</button>
              </div>
              <div className="sign-up">
                <button>Đăng ký</button>
              </div>
            </div>
            <div className="banner-rectangle">
              <div className="banner">
                <div className="banner-text">
                  <h1>KHÁM PHÁ KHÔNG GIAN SỐNG LÝ TƯỞNG</h1>
                  <p>
                    Lorem facilisis convallis quam sit varius. Enim nibh odio
                    phasellus sem at sed id ut arcu. In turpis tortor diam
                    mauris mauris magna adipiscing eu.{" "}
                  </p>
                </div>
                <div className="banner-image">
                  <img src="/assets/house-banner.png" alt="House Banner" />
                </div>
              </div>
            </div>
            <div className="Type-tabs">
              <div className="Type-tabs-rectangle">
                <button className="Type-tabs-button">Bán</button>
                <button className="Type-tabs-button">Thuê</button>
                <button className="Type-tabs-button">Dự án</button>
              </div>
              <div class="Type-options-rectangle">
                <div class="filter-component">
                  <div class="filter-section">
                    <label htmlFor="location">Vị trí</label>

                    <select
                      id="location"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    >
                      <option value="">Nơi bạn muốn sống</option>
                      <option value="location1">Location 1</option>
                      <option value="location2">Location 2</option>
                      <option value="location3">Location 3</option>
                    </select>
                  </div>
                  <div class="filter-section">
                    <label htmlFor="price">Mức giá</label>
                    <select
                      id="price"
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value)}
                    >
                      <option value="">Chọn mức giá</option>
                      <option value="price1">Price 1</option>
                      <option value="price2">Price 2</option>
                      <option value="price3">Price 3</option>
                    </select>
                  </div>
                  <div class="filter-section">
                    <label htmlFor="superficiality">Diện tích</label>
                    <select
                      id="superficiality"
                      value={superficialityFilter}
                      onChange={(e) => setSuperficialityFilter(e.target.value)}
                    >
                      <option value="">Chọn diện tích</option>
                      <option value="superficiality1">Superficiality 1</option>
                      <option value="superficiality2">Superficiality 2</option>
                      <option value="superficiality3">Superficiality 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="for-you-rectangle">
              <p>Bất động sản dành cho bạn</p>
            </div>
            <div className="products">
              {contents.map((contents) => (
                <Products
                  key={contents.id}
                  image={contents.image}
                  name={contents.name}
                  location={contents.location}
                  price={contents.price}
                  superficiality={contents.superficiality}
                  bedroom={contents.bedroom}
                  bathroom={contents.bathroom}
                />
              ))}
            </div>
          </body>
        </div>
      }
    </>
  );
}

export default App;
