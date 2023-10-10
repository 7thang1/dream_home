import React, { useState } from "react";
import styled, {css} from "styled-components";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {RiArrowDropDownLine} from "react-icons/ri";


const TypeTabsRectangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 80px;
  margin-top: 70px;
  width: 238px;
  height: 47px;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  border: 0.5px solid rgba(85, 60, 52, 0.2);
  background: #fff;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.1);
  padding: 0 25px;
`;

const TypeTabsButton = styled.button`
  background-color: white;
  border: transparent;
  color: black;
  text-decoration: none;
  cursor: pointer;
  color: #806056;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; 
  &:hover {
    color: #806056;
  border-bottom: 2px solid #806056;
  }
`;
const FilterRectangle = styled.div`
 display: flex;
  align-items: center;
  width: 859px;
  height: 94px;
  padding-left: 80px;`;
const FilterComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0px 16px 16px 16px;
  border: 0.5px solid rgba(85, 60, 52, 0.2);
  background: #fff;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.1);
  width: 859px;
  height: 94px;
  height: 100%;
  padding: 0 25px;
`;

const FilterSection = styled.div`
   margin-right: 20px;
  padding-right: 50px;
  border-right: 2px solid #ccc;
  position: relative;
  display: inline-block;
  &:last-child {
      border-right: none;
  }
`;

const Label = styled.label`
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  color: #7d7d7d;
  padding: 5px;
  border: none;
  background-color: #f0f0f0;
  width: 180px;
  height: 30px;
  margin-left: 5px;
  display: block;
  background-position: calc(100% - 10px) center;
  padding-right: 20px;
  position: relative;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  appearance: none;
  background-image: ${(props) => selectBackgroundImages[props.id] || 'none'};
  
`;
const selectBackgroundImages = {
    location: `url(../assets/location.png)`,
    price: `url(../assets/down-arrow.png)`,
    superficiality: `url(../assets/down-arrow.png)`,
  };


const FilterTab = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [superficialityFilter, setSuperficialityFilter] = useState('');

  return (
    <div className="Type-tabs">
      <TypeTabsRectangle>
        <TypeTabsButton>Bán</TypeTabsButton>
        <TypeTabsButton>Thuê</TypeTabsButton>
        <TypeTabsButton>Dự án</TypeTabsButton>
      </TypeTabsRectangle>
      <FilterRectangle>

      <FilterComponent>
        <FilterSection>
          <Label htmlFor="location">Vị trí</Label>
          <Select
            id="location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">Nơi bạn muốn sống</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            <option value="location3">Location 3</option>
          </Select>
        </FilterSection>
        <FilterSection>
          <Label htmlFor="price">Mức giá</Label>
          <Select
            id="price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Chọn mức giá</option>
            <option value="price1">Price 1</option>
            <option value="price2">Price 2</option>
            <option value="price3">Price 3</option>
          </Select>
        </FilterSection>
        <FilterSection>
          <Label htmlFor="superficiality">Diện tích</Label>
          <Select
            id="superficiality"
            value={superficialityFilter}
            onChange={(e) => setSuperficialityFilter(e.target.value)}
          >
            <option value="">Chọn diện tích</option>
            <option value="superficiality1">Superficiality 1</option>
            <option value="superficiality2">Superficiality 2</option>
            <option value="superficiality3">Superficiality 3</option>
          </Select>
        </FilterSection>
      </FilterComponent>
            </FilterRectangle>
    </div>
  );
};

export default FilterTab;
